import { useHistory } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const EmptyBoards = () => {
  const history = useHistory();

  const onClick = () => {
    history.push("/board/new");
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <img
        src="/note.svg"
        height={110}
        width={110}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board!
      </h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
