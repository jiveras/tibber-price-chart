import fetch from 'node-fetch'


export default async function handler(request, response) {
  const tibberResponse = await fetch("https://api.tibber.com/v1-beta/gql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TIBBER_ACCESS_TOKEN}`,
    },
    body: `{
                "query": "{  viewer {homes {currentSubscription{ priceInfo{ current{ total energy tax startsAt } today { total energy tax startsAt } tomorrow { total energy tax startsAt } } } } }}",
                "operationName": null
            }`,
  });

  const data = await tibberResponse.json();

  let priceData = data.data.viewer.homes[0].currentSubscription.priceInfo.today;

  response.status(200).json(priceData);
}
