import react_bw from "../assets/react_bw.svg";
import redux from "../assets/redux.svg";
import css3 from "../assets/css3.svg";
import python from "../assets/python.svg";
import postgresql from "../assets/postgresql.svg";
import django from "../assets/django.svg";

export interface ISkill {
    name: string,
    img: string,
    content: string
}

export const skills: ISkill[] = [
    {
        name: "React",
        content: "I possess exceptional skills in React, a popular JavaScript library for building user interfaces. With my React expertise, I develop interactive and responsive web applications. I am proficient in creating reusable components, managing state and props, and handling lifecycle events. Skilled in using React Router for navigation and Redux for state management, I deliver seamless and efficient user experiences.",
        img: react_bw
    },
    {
        name: "Redux Js",
        content: "I am proficient in Redux, a powerful state management library for JavaScript applications. With Redux, I can efficiently manage and organize the state of complex applications. By following the unidirectional data flow pattern, I ensure that state changes are predictable and easily traceable. I am skilled in defining actions, creating reducers, and setting up the store to maintain the application's state tree.",
        img: redux
    },
    {
        name: "CSS",
        content: "I am highly skilled in CSS, the styling language that brings websites to life. With expertise in selectors, properties, and values, I create visually appealing user interfaces. I excel in writing clean, organized code and implementing responsive layouts, transitions, and animations. Proficient in CSS preprocessors and frameworks like Sass, Less, Bootstrap, and Tailwind CSS, I ensure efficient and consistent development.",
        img: css3
    },
    {
        name: "Python",
        content: "I possess exceptional skills in Python, a versatile and powerful programming language. With expertise in Python, I excel in developing efficient and scalable solutions for various domains. I am adept at writing clean, readable code and implementing algorithms, data structures, and object-oriented programming concepts. Proficient in frameworks like Django and Flask, I build robust web applications.",
        img: python
    },
    {
        name: "Django",
        content: "I have extensive expertise in Django, a high-level Python web framework. With my Django skills, I develop secure and scalable web applications, utilizing its built-in features like authentication, ORM, and templating. Proficient in designing models, views, and REST APIs, I create robust backends. I am skilled in database integration, caching, and optimizing performance. With Django, I deliver efficient and reliable web solutions.",
        img: django
    },
    {
        name: "Postgres",
        content: "I am highly proficient in PostgreSQL, a powerful and feature-rich open-source relational database management system. With my PostgreSQL skills, I design and optimize database schemas, create complex queries, and ensure data integrity. I have expertise in performance tuning, indexing, and query optimization to maximize efficiency. I develop scalable and robust database solutions, adhering to industry standards.",
        img: postgresql
    }
]
