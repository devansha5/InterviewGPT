import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge'; // Edge runtime is correct for this API.

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure the environment variable is properly set.
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
      model: "gpt-3.5-turbo", // Ensure the model exists in your OpenAI plan.
      messages: [...messages],
      max_tokens: 512,
    });

    if (!response.choices || response.choices.length === 0) {
      return new Response("No response received from OpenAI API.", {
        status: 500,
        headers: { "Content-Type": "text/plain" },
      });
    }

    // Extract the assistant's message content.
    const assistantMessage = response.choices[0].message.content;

    // Send the assistant's message content directly.
    return new Response(assistantMessage, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    // Log the error for debugging purposes.
    console.error("Error during OpenAI API call:", error);

    // Return a friendly error message.
    return new Response("An error occurred while processing your request.", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
