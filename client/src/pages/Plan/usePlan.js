import { useCallback, useEffect, useState } from "react";
import CoursePlannerClient from "../../common/CoursePlannerClient";
import { useParams } from "react-router-dom";

const regulations = [
    {
        courses: ["SOFTENG370", "SOFTENG370", "SOFTENG370"],
        _id: "5f62d3e1ee8b1a00279706fe",
        points: 40,
        pointRequirement: "EXACTLY",
        isSatisfied: true,
    },
    {
        courses: ["SOFTENG370", "SOFTENG370"],
        _id: "5f62d578c127820027cd731d",
        points: 0,
        pointRequirement: "ATLEAST",
        isSatisfied: false,
    },
    {
        courses: ["SOFTENG370"],
        _id: "5f62d585c127820027cd7320",
        points: 15,
        pointRequirement: "EXACTLY",
        isSatisfied: false,
    },
    {
        courses: ["SOFTENG370", "SOFTENG370"],
        _id: "5f62d585c127820027cd7320",
        points: 30,
        pointRequirement: "ATLEAST",
        isSatisfied: true,
    },
    {
        courses: ["SOFTENG370"],
        _id: "5f62d585c127820027cd7320",
        points: 15,
        pointRequirement: "EXACTLY",
        isSatisfied: false,
    },
    {
        courses: ["SOFTENG370", "SOFTENG370", "SOFTENG370"],
        _id: "5f62d3e1ee8b1a00279706fe",
        points: 40,
        pointRequirement: "UPTO",
        isSatisfied: false,
    },
];

const usePlan = () => {
    const [student, setStudent] = useState();
    const [programme, setProgramme] = useState({ regulations });
    const { planId } = useParams();
    const [realCourses, setRealCourses] = useState([]);
    const [unfilteredRealCourses, setUnfilteredRealCourses] = useState([]);
    const [plan, setPlan] = useState([]);

    const initPage = useCallback(async () => {
        // Promise.all because we are going to have a lot of API calls
        // once requirements/cousres/notes come in !
        // TODO: Add API call to get the specific ProgrammeDegree (programme) for the plan
        Promise.all([
            CoursePlannerClient.getCourses(),
            CoursePlannerClient.getPlan(planId),
            CoursePlannerClient.getStudents(),
            CoursePlannerClient.getProgrammes(),
        ])
            .then((values) => {
                const [realCourses, plan, students, programs] = values;
                setUnfilteredRealCourses(realCourses);
                const unique = [...new Set(plan.courseAllocations.map((item) => item.course))];
                setRealCourses(realCourses.filter((val) => !unique.includes(val.courseCode)));
                setPlan(plan);
                setStudent(students.filter((s) => s._id === plan.student)[0]);
                const programme = programs.filter((s) => s._id === plan.programmeDegree)[0];
                setProgramme(programme);

                //TODO remove regubelow once regulations populated ( Below is dummy data)
                setProgramme({ ...programme, regulations: regulations });
            })
            .catch((e) => console.log(e));
    }, [planId]);

    useEffect(() => {
        initPage();
    }, [initPage]);

    const setCourseAllocations = (newAlloc) => {
        CoursePlannerClient.updatePlan({ ...plan, courseAllocations: newAlloc }).then((res) => {
            const unique = [...new Set(res.courseAllocations.map((item) => item.course))];
            setRealCourses(realCourses.filter((val) => !unique.includes(val.courseCode)));
            setPlan(res);
        });
    };

    return { student, realCourses, programme, plan, unfilteredRealCourses, setCourseAllocations };
};

export default usePlan;
