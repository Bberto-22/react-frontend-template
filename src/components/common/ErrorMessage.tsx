interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message = 'Ha ocurrido un error inesperado' }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-sm text-destructive">{message}</p>
    </div>
  );
}
