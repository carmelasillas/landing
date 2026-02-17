
export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'Cultura' | 'Ocio' | 'Gastronomía' | 'Viajes';
  image: string;
}

export interface UserRegistration {
  name: string;
  phone: string;
  email: string;
  activityId: string;
  isFather: boolean;
}
