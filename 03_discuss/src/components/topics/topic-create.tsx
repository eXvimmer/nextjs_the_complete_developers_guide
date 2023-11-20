import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import * as actions from "@/actions";

function TopicCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg">Create a topic</h3>
            <Input label="name" labelPlacement="outside" placeholder="Name" />
            <Textarea
              label="description"
              labelPlacement="outside"
              placeholder="Describe your topic"
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default TopicCreateForm;
