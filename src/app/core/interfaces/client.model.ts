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
  occupation: string;
  name: string;
  email: string;
  idClient: number;
}