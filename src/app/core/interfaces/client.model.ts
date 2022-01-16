export interface ClientData {
  clients: Client[];
}

export interface Client {
  id: string;
  nickname: string;
  inscription: string;
  name: string;
  status: string;
  email: Email[];
}

export interface Email {
  id: string;
  occupation: string;
  name: string;
  email: string;
}