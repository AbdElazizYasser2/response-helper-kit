export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

export function success<T>(data: T, message = "Success"): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
  };
}

export function error(message = "Something went wrong"): ApiResponse<null> {
  return {
    success: false,
    message,
    data: null,
  };
}
