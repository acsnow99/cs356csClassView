import type { Course } from "../data";

interface Props {
  course: Course;
  faded: boolean;
  onSelect: (c: Course) => void;
}

export default function CourseCard({ course, faded, onSelect }: Props) {
  return (
    <button
      className={`coursecard ${faded ? "faded" : ""} ${course.requirement.toLowerCase()}`}
      onClick={() => onSelect(course)}
    >
      <div className="number">{course.number}</div>
      <div className="title">{course.title}</div>
      <div className="meta">
        <span className={`pill ${course.requirement.toLowerCase()}`}>
          {course.requirement}
        </span>
      </div>
    </button>
  );
}
