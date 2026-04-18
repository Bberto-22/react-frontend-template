interface EmptyStateProps {
  entity: string;
}

export function EmptyState({ entity }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <p className="text-muted-foreground">No hay {entity} disponibles</p>
    </div>
  );
}
