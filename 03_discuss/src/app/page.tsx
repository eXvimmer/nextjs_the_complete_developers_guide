import TopicCreateForm from "@/components/topics/topic-create";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className=" m-2 text-xl">Top Posts</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}
