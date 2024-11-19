import OpenAI from 'openai'; // Necessary import for OpenAI API usage.

export const runtime = 'edge'; // Use the Edge runtime for optimal performance.

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure the environment variable is set properly.
});

export async function POST(req: Request) {
  try {
    // Parse the request JSON to extract the messages.
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid input: 'messages' must be an array.", {
        status: 400,
        headers: { "Content-Type": "text/plain" },
      });
    }

    // Call the OpenAI API with the provided messages.
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use the appropriate model available in your OpenAI plan.
      messages: [...messages],
      max_tokens: 512,
    });

    if (!response.choices || response.choices.length === 0) {
      return new Response("No response received from OpenAI API.", {
        status: 500,
        headers: { "Content-Type": "text/plain" },
      });
    }

    // Extract and return the assistant's message content.
    const assistantMessage = response.choices[0].message.content;
    return new Response(assistantMessage, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });

  } catch (error) {
    console.error("Error during OpenAI API call:", error);

    // Return a user-friendly error message.
    return new Response("An error occurred while processing your request.", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
