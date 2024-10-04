const express=require('express');

const { LeadSourceReport,GetProductReportDateWise,
    EmployeesReportDetail,EmployeesReportDetailByFilter,EmployeesReportDetailByFilter1 } = require('../controllers/allReportController');

const router=express.Router();
  
router.route("/LeadSourceReport").post(LeadSourceReport); 
router.route("/GetProductReportDateWise").post(GetProductReportDateWise); 
router.route("/EmployeesReportDetail").post(EmployeesReportDetail); 
router.route("/EmployeesReportDetailByFilter").post(EmployeesReportDetailByFilter); 
router.route("/EmployeesReportDetailByFilter1").post(EmployeesReportDetailByFilter1); 
 
module.exports=router;     