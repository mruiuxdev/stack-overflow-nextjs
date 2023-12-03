import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import HomeFilters from "@/components/shared/home/HomeFilters";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Cascading deletes uns SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "javascript" },
    ],
    author: {
      _id: "author1",
      name: "John Doe",
      picture: "url_to_picture1",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "Cascading deletes uns SQLAlchemy?",
    tags: [
      { _id: "3", name: "python" },
      { _id: "4", name: "javascript" },
    ],
    author: {
      _id: "author2",
      name: "Jane Doe",
      picture: "url_to_picture2",
    },
    upvotes: 15,
    views: 120,
    answers: [],
    createdAt: new Date("2021-09-02T12:30:00.000Z"),
  },
  {
    _id: "3",
    title: "Cascading deletes uns SQLAlchemy?",
    tags: [
      { _id: "5", name: "typescript" },
      { _id: "6", name: "react" },
    ],
    author: {
      _id: "author3",
      name: "Alice",
      picture: "url_to_picture3",
    },
    upvotes: 8,
    views: 80,
    answers: [],
    createdAt: new Date("2021-09-03T13:45:00.000Z"),
  },
  {
    _id: "4",
    title: "Cascading deletes uns SQLAlchemy?",
    tags: [
      { _id: "7", name: "java" },
      { _id: "8", name: "spring" },
    ],
    author: {
      _id: "author4",
      name: "Bob",
      picture: "url_to_picture4",
    },
    upvotes: 12,
    views: 110,
    answers: [],
    createdAt: new Date("2021-09-04T14:15:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-questions" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Questions
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. Our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
