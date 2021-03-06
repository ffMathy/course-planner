const insertAnds = (str) => {
    return str.split("and").reduce((acc, curr, idx) => {
        if (idx > 0) {
            return [...acc, "AND", curr];
        } else {
            return [...acc, curr]
        }
    }, []).filter(r => r !== "").map(r => r.trim().replace(/(^,)|(,$)/g, ""))
}


const parseRequirements = (requirementsStr) => {


    if (!requirementsStr || requirementsStr.length < 2) {
        return [[], [], []]
    }


    const cleanRequirements = requirementsStr.split("\n").map(str => str.replace('\r', ''));

    const preReqStr = cleanRequirements.filter(r => r.includes('Prerequisite')).map(r => r.replace('Prerequisite: ', ''))[0] || ""
    const coReqStr = cleanRequirements.filter(r => r.includes('Corequisite')).map(r => r.replace('Corequisite: ', ''))[0] || ""
    const resReqStr = cleanRequirements.filter(r => r.includes('Restriction')).map(r => r.replace('Restriction: ', ''))[0] || ""
    const notesStr = cleanRequirements.filter(r => !r.includes('Prerequisite') && !r.includes('Corequisite') && !r.includes('Restriction'))[0] || ""

    const prerequisites = insertAnds(preReqStr)
    const corequisities = insertAnds(coReqStr)
    const restrictions = [...insertAnds(resReqStr), notesStr].filter(r => r !== "")


    return [
        prerequisites,
        corequisities,
        restrictions
    ]
}


module.exports = { parseRequirements }