import {KitQLClient} from '@kitql/client'

export const kitQLClient = new KitQLClient({
  url : 'https://countries.trevorblades.com/graphql',
  // defaultCache : 1000*60*3,
  headersContentType: 'application/json',
  logType: ['server', 'client', 'operationAndvariables']
})