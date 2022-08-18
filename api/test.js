export default function handler(request, response) {
    response.status(200).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
      test:  `Bearer ${process.env.TIBBER_ACCESS_TOKEN}`
    });
  }