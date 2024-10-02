export interface TimeDetails {
  startDateTime: string;
  endDateTime: string;
  allDay?: boolean;
}

export interface SpaceDetails {
  spaceId: string;
  configurationId?: string;
}

export interface ResourceDetails {
  resourceId: string;
  quantity: number;
}

export interface BookingDetails {
  bookingTitle?: string;
  description?: string;
  timeSpan: TimeDetails;
  spaces: SpaceDetails[];
  resources: ResourceDetails[];
}

export interface EventRequest {
  eventTitle: string;
  description?: string;
  categoryId?: string;
  timeSpan: TimeDetails;
  bookingDetails: BookingDetails[];  
  additionalInformation?: string;
}
