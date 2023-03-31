export interface ProfileUser{
  uid: string;
  email?: string;
  name?: string;
  phone?: string;
  address?: string;
  photoURL?: string;
  Ocleanups?: {'location':string,'strength':string,'description':string,'photoURL':string};
}
