import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY!,
});



const openai = new OpenAIApi(configuration);

export const POST = async (request: NextRequest) => {
    const requestBody = await request.json();
    // check if requestBody is empty
    if (requestBody.trim().length === 0) {
        return NextResponse.json({
            success: false,
            message: 'Please enter a valid code.'
        }, { status: 400 });
    }

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write code for the following problem statement "${requestBody}".`,
            temperature: 0.9,
            max_tokens: 2000,
        });
        const result = completion.data.choices[0].text;
        return NextResponse.json({
            success: true,
            message: 'Added comments to code successfull.',
            result
        });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            error: error.message
        });
    }
}

