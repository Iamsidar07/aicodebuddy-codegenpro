/* eslint-disable import/no-anonymous-default-export */
import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const POST = async function (request: NextRequest) {
    const requestBody = await request.json();

    const { platform, topic, wordLimit } = requestBody;

    if (platform.trim().length === 0 || topic.trim().length === 0) {
        return NextResponse.json({
            success: false,
            message: 'Missing platform or topic.'
        }, { status: 400 });
    }


    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Hey ChatGPT, You are a MIT Graduates in Computer scrience and you teaches coding to kids, Create content on the topic ${topic} to upload on the  ${platform} platform  under ${wordLimit} words.Please write this in a structured and polite way.`,
            temperature: 0.7,
            max_tokens: 2000,
        });
        const result = completion.data.choices[0].text;
        return NextResponse.json({
            success: true,
            message: 'success',
            result
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            success: false
        }, { status: 500 })

    }
}