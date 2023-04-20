import { Router } from "express"
import { students } from "../DataBace/studentsArray.js"
import studentMode from "../DataBace/studentMode.js"
import { faker } from "@faker-js/faker";


const router = new Router();

router.get('/',async (req, res) => {
    const students= await studentMode.find().lean()
    res.render("students", { students: students })
})

router.get('/create', (req, res) => {
    const studentsArray=[]
    for(let i =0;i<1000;i++){
        studentsArray.push({
            name: faker.name.firstName(),
            collage: faker.address.city()
        })
    }
    studentMode.create(studentsArray)
    res.send("Done");
});
router.get('/update', (req, res) => {

})
router.get('/delete', (req, res) => {

})
router.get('/:id', (req, res) => {
    res.render("student")
})

export default router