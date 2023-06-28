export interface ApiResponse<T> {
  status: "success" | "failure";
  errors?: ErrorDto[];
  data?: T;
}

export interface ErrorDto {
  field: string;
  errorMessage: string;
}
