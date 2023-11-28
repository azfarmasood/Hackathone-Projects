import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: 'eq5snmlv',
  dataset: 'production',
  apiVersion: "2023-11-01",
  useCdn: true,
};

const client = createClient(config);

export default client;