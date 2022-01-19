export interface ClientData {
  clients: Client[];
}

export interface Client {
  id: number;
  nickname: string;
  inscription: string;
  name: string;
  status: string;
  emails: Email[];
  image: string;
}

export interface Email {
  id: number;
  occupation: string;
  name: string;
  email: string;
}