import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Call the OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [...messages],
      max_tokens: 512,
    });

    // Extract just the assistant's message content
    const assistantMessage = response.choices[0].message.content;

    // Send the message content directly (no JSON wrapping)
    return new Response(assistantMessage, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("Error during OpenAI API call:", error);

    return new Response("An error occurred while processing your request.", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
