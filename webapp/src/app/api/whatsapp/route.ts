import { type NextRequest, NextResponse } from 'next/server'

async function validateWebhook(request: NextRequest) {
	const { searchParams } = new URL(request.url)
	const mode = searchParams.get('hub.mode')
	const challenge = searchParams.get('hub.challenge')
	const verify_token = searchParams.get('hub.verify_token')

	// console.log({ verify_token, challenge, mode })
	// if (verify_token !== process.env.WHATSAPP_VERIFY_TOKEN)
	// 	throw 'Invalid verify token'

	const jsonAccepted = request.headers.get('Content-Type') === 'application/json'
	const body = jsonAccepted ? await request.json() : null

	console.log({ mode, challenge, body })

	return { mode, challenge, body }
}

export async function GET(request: NextRequest) {
	try {
		const { mode, challenge, body } = await validateWebhook(request)
		console.log({ mode, challenge, body })
		return new NextResponse(challenge || '', { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 403 })
	}
}

export async function POST(request: NextRequest) {
	try {
		const { mode, challenge, body } = await validateWebhook(request)
		console.log({ mode, challenge, body })
		console.log({ body: JSON.stringify(body, null, 2) })
		return new NextResponse(challenge || '', { status: 200 })
	} catch (error) {
		console.log({ error })
		return NextResponse.json({ message: error }, { status: 403 })
	}
}
