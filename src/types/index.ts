import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Class {
  name: string;
  courseNumber: string;
  type: 'GE' | 'Elective' | 'Major core';
  semesters: Semester[];
  creditHours: number;
  key: string;
}

export type Semester = 'F' | 'W' | 'Spr' | 'Sum'; 
