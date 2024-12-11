export class Properties {
  id: number;
  title: string;
  description: string;
  address: string;
  pricePerNight: number;
  type: string;
  ownerId: number;
  bedCount: number;
  isActive: boolean;
}
export class Rent {
  id: number;
  bookingId: number;
  rentStartDate: string;
  rentEndDate: string;
  isEnd: boolean;
}

export class Booking {
  id: number;
  propertyId: number;
  clientId: number;
  startDate: string;
  endDate: string;
  totalPrice: boolean;
}

export class User {
  id: number;
  username: number;
  role: string;
}

