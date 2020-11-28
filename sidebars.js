module.exports = {
  someSidebar: {
    // Basics
    Basics: [
      {
        type: "category",
        label: "Intoduction",
        items: [
          "basics/introduction/introduction",
          "basics/introduction/doIneedCERP",
          "basics/introduction/openSource",
          "basics/introduction/gettingStart",
          "basics/introduction/theChampion",
          "basics/introduction/implementStra",
          "basics/introduction/flowchart",
          "basics/introduction/conceptTerms",
        ],
      },
      {
        type: "category",
        label: "Setting Up",
        items: [
          "basics/settingUp/settingUp",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Basic Setup",
                items: [
                  "basics/settingUp/companySetup",
                  "basics/settingUp/tax",
                  "basics/settingUp/salesGoal",
                  "basics/settingUp/globalDefault",
                  "basics/settingUp/systemSettings",
                  "basics/settingUp/letterHead",
                ],
              },
              {
                type: "category",
                label: "Data Import",
                items: [
                  "basics/settingUp/dataImport",
                  "basics/settingUp/dataExport",
                  "basics/settingUp/coAImporter",
                  "basics/settingUp/dlBackup",
                ],
              },
              {
                type: "category",
                label: "User and Permissions",
                items: [
                  "basics/settingUp/userAndPerm",
                  "basics/settingUp/addUser",
                  "basics/settingUp/roleProfile",
                  "basics/settingUp/roleBasedPerm",
                  "basics/settingUp/userPerm",
                  "basics/settingUp/rolePermPageReport",
                  "basics/settingUp/sharing",
                  "basics/settingUp/adminstrator",
                ],
              },
              {
                type: "category",
                label: "Printing",
                items: [
                  "basics/settingUp/printSettings",
                  "basics/settingUp/printFormat",
                  "basics/settingUp/printFormatBuilder",
                  "basics/settingUp/printStyle",
                  "basics/settingUp/printHeadings",
                  "basics/settingUp/addressTemp",
                  "basics/settingUp/tCTemp",
                  "basics/settingUp/chequePrint",
                  "basics/settingUp/customTranslations",
                  "basics/settingUp/rawPrint",
                ],
              },
              {
                type: "category",
                label: "Workflows",
                items: [
                  "basics/settingUp/workflows",
                  "basics/settingUp/workflowsAct",
                  "basics/settingUp/workflowState",
                  "basics/settingUp/assigmentRule",
                ],
              },
              {
                type: "category",
                label: "Email and SMS",
                items: [
                  "basics/settingUp/emailDomain",
                  "basics/settingUp/emailAcc",
                  "basics/settingUp/emailInbox",
                  "basics/settingUp/emailTemp",
                  "basics/settingUp/sendingEmail",
                  "basics/settingUp/linkEmail",
                  "basics/settingUp/emailDigest",
                  "basics/settingUp/autoEmail",
                  "basics/settingUp/smsSettings",
                  "basics/settingUp/notification",
                  "basics/settingUp/documentFollow",
                  "basics/settingUp/emailDropbox",
                ],
              },
              {
                type: "category",
                label: "System Configuration",
                items: [
                  "basics/settingUp/showHideModules",
                  "basics/settingUp/naming",
                  "basics/settingUp/sessionDefaults",
                  "basics/settingUp/bulkRename",
                  "basics/settingUp/bulkUpdate",
                  "basics/settingUp/milestone",
                  "basics/settingUp/autoRepeat",
                  "basics/settingUp/domainSettings",
                  "basics/settingUp/energyPoint",
                ],
              },
              {
                type: "category",
                label: "Data Privacy",
                items: [
                  "basics/settingUp/personalDataReq",
                  "basics/settingUp/personalDataDel",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Articles",
            items: [
              {
                type: "category",
                label: "Basic Setup",
                items: [
                  // "basics/settingUp/companySetup", // set items here
                  // "basics/settingUp/tax",
                  // "basics/settingUp/salesGoal",
                  // "basics/settingUp/globalDefault",
                  // "basics/settingUp/systemSettings",
                  // "basics/settingUp/letterHead",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Videos",
            items: [
              {
                type: "category",
                label: "Basic Setup",
                items: [
                  // "basics/settingUp/companySetup", // set items here
                  // "basics/settingUp/tax",
                  // "basics/settingUp/salesGoal",
                  // "basics/settingUp/globalDefault",
                  // "basics/settingUp/systemSettings",
                  // "basics/settingUp/letterHead",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Using CERP",
        items: [
          "basics/usingCERP/usingCERP",
          {
            type: "category",
            label: "Tools",
            items: [
              "basics/usingCERP/toDo",
              "basics/usingCERP/notes",
              "basics/usingCERP/video",
              "basics/usingCERP/calendar",
              "basics/usingCERP/chat",
              "basics/usingCERP/dashboard",
              "basics/usingCERP/globalSearch",
              "basics/usingCERP/desktop",
            ],
          },
          {
            type: "category",
            label: "Collaboration Tools",
            items: [
              "basics/usingCERP/assignment",
              "basics/usingCERP/tags",
              "basics/usingCERP/kanban",
              "basics/usingCERP/filterBy",
              "basics/usingCERP/saveFilter",
              "basics/usingCERP/searchFilter",
              "basics/usingCERP/collaboratingAroundForms",
            ],
          },
          {
            type: "category",
            label: "Navigation Guidance",
            items: ["basics/usingCERP/keyShort"],
          },
          {
            type: "category",
            label: "Articles",
            items: [
              // 'basics/usingCERP/toDo',
              // 'basics/usingCERP/notes',
              // 'basics/usingCERP/video',
              // 'basics/usingCERP/calendar',
              // 'basics/usingCERP/chat',
              // 'basics/usingCERP/dashboard',
              // 'basics/usingCERP/globalSearch',
              // 'basics/usingCERP/desktop',
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Automation",
        items: [
          "basics/automation/automation",
          {
            type: "category",
            label: "Automation",
            items: [
              "basics/automation/assigmentRule",
              "basics/automation/milestone",
              "basics/automation/autoRepeat",
              "basics/automation/eventStreaming",
            ],
          },
        ],
      },
    ],
    // Core Modules
    "Core Modules": [
      {
        type: "category",
        label: "Accounts",
        items: [
          "coreModules/accounts/accounts",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Setup and Opening",
                items: [
                  "coreModules/accounts/intro",
                  "coreModules/accounts/accSettings",
                  "coreModules/accounts/company",
                  "coreModules/accounts/chartOfAcc",
                  "coreModules/accounts/openingBalance",
                  "coreModules/accounts/costCenter",
                  "coreModules/accounts/distributedCostCenter",
                  "coreModules/accounts/fiscalY",
                  "coreModules/accounts/accPeriod",
                  "coreModules/accounts/financeBook",
                  "coreModules/accounts/accD",
                  "coreModules/accounts/bank",
                  "coreModules/accounts/bankAcc",
                ],
              },
              {
                type: "category",
                label: "Journals and Payments",
                items: [
                  "coreModules/accounts/journalEnt",
                  "coreModules/accounts/journalEntTemp",
                  "coreModules/accounts/paymentEnt",
                  "coreModules/accounts/dunning",
                  "coreModules/accounts/paymentReq",
                  "coreModules/accounts/modeOfPay",
                  "coreModules/accounts/paymentTerms",
                  "coreModules/accounts/paymentTermsTemp",
                  "coreModules/accounts/advancePayEnt",
                  "coreModules/accounts/interComJourEnt",
                ],
              },
              {
                type: "category",
                label: "Billing",
                items: [
                  "coreModules/accounts/salesInovice",
                  "coreModules/accounts/purchaseInovice",
                  "coreModules/accounts/interCompany",
                  "coreModules/accounts/credit",
                  "coreModules/accounts/debit",
                  "coreModules/accounts/creditLimit",
                ],
              },
              {
                type: "category",
                label: "Taxes",
                items: [
                  "coreModules/accounts/taxTemp",
                  "coreModules/accounts/taxWithholiding",
                  "coreModules/accounts/taxRule",
                  "coreModules/accounts/taxCat",
                ],
              },
              {
                type: "category",
                label: "Pricing",
                items: [
                  "coreModules/accounts/pricingRule",
                  "coreModules/accounts/promoSch",
                  "coreModules/accounts/exchangeRate",
                  "coreModules/accounts/currencyEx",
                  "coreModules/accounts/currency",
                ],
              },
              {
                type: "category",
                label: "Retail Operations",
                items: [
                  "coreModules/accounts/posProfile",
                  "coreModules/accounts/pos",
                  "coreModules/accounts/posCashier",
                ],
              },
              {
                type: "category",
                label: "Tools",
                items: [
                  "coreModules/accounts/bankRec",
                  "coreModules/accounts/paymentRec",
                  "coreModules/accounts/periodClos",
                  "coreModules/accounts/paymentOrder",
                  "coreModules/accounts/quickbooks",
                  "coreModules/accounts/processStatement",
                ],
              },
              {
                type: "category",
                label: "Reports",
                items: ["coreModules/accounts/accReports"],
              },
              {
                type: "category",
                label: "Advanced",
                items: [
                  "coreModules/accounts/multiCurrAcc",
                  "coreModules/accounts/deferredRev",
                  "coreModules/accounts/defferedExp",
                  "coreModules/accounts/processDeffered",
                  "coreModules/accounts/bankGuarantee",
                  "coreModules/accounts/loyaltyProgram",
                  "coreModules/accounts/budgeting",
                  "coreModules/accounts/autoRepeat",
                  "coreModules/accounts/inoviceDisc",
                ],
              },
              {
                type: "category",
                label: "Subscription",
                items: ["coreModules/accounts/intro"],
              },
              {
                type: "category",
                label: "Shareholder Management",
                items: ["coreModules/accounts/intro"],
              },
              {
                type: "category",
                label: "GST",
                items: ["coreModules/accounts/intro"],
              },
            ],
          },
          {
            type: "category",
            label: "Articles",
            items: [
              {
                type: "category",
                label: "Basic Setup",
                items: [
                  "basics/settingUp/companySetup", // set items here
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Videos",
            items: [
              {
                type: "category",
                label: "Basic Setup",
                items: [
                  "basics/settingUp/companySetup", // set items here
                ],
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Stock",
        items: [
          "coreModules/stock/stock",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Basics",
                items: [
                  "coreModules/stock/intro",
                  "coreModules/stock/warehouse",
                  "coreModules/stock/item",
                  "coreModules/stock/openStock",
                  "coreModules/stock/accOfInvent",
                  "coreModules/stock/priceLists",
                  "coreModules/stock/stockSett",
                ],
              },
              {
                type: "category",
                label: "Item Variants",
                items: [
                  "coreModules/stock/itemVar",
                  "coreModules/stock/itemAttr",
                ],
              },
              {
                type: "category",
                label: "Setup",
                items: [
                  "coreModules/stock/itemPr",
                  "coreModules/stock/itemGrp",
                  "coreModules/stock/uom",
                  "coreModules/stock/manufact",
                ],
              },
              {
                type: "category",
                label: "Stock Transactions",
                items: [
                  "coreModules/stock/matReq",
                  "coreModules/stock/purcRecp",
                  "coreModules/stock/delivNote",
                  "coreModules/stock/stockEnt",
                  "coreModules/stock/packingSlip",
                  "coreModules/stock/retSample",
                  "coreModules/stock/landedCost",
                  "coreModules/stock/pickList",
                ],
              },
              {
                type: "category",
                label: "Serial and Batch Number",
                items: [
                  "coreModules/stock/serialN",
                  "coreModules/stock/batch",
                  "coreModules/stock/installNote",
                ],
              },
              {
                type: "category",
                label: "Tools",
                items: [
                  "coreModules/stock/quaInspec",
                  "coreModules/stock/stockRec",
                  "coreModules/stock/quickStock",
                ],
              },
              {
                type: "category",
                label: "Return",
                items: [
                  "coreModules/stock/salesRet",
                  "coreModules/stock/purcRet",
                ],
              },
              {
                type: "category",
                label: "Advanced",
                items: [
                  "coreModules/stock/delivTrip",
                  "coreModules/stock/projectedQu",
                  "coreModules/stock/perpetualInv",
                ],
              },
              {
                type: "category",
                label: "Stock Reports",
                items: [
                  "coreModules/stock/stockLed",
                  "coreModules/stock/stockLevel",
                  "coreModules/stock/bomEx",
                  "coreModules/stock/stockVal",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Articles",
            items: [
              {
                type: "category",
                label: "Basic Setup",
                items: [
                  "basics/settingUp/companySetup", // set items here
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Videos",
            items: [
              {
                type: "category",
                label: "Basic Setup",
                items: [
                  "basics/settingUp/companySetup", // set items here
                ],
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "CRM",
        items: [
          "coreModules/crm/crm",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Sales",
                items: [
                  "coreModules/crm/lead",
                  "coreModules/crm/opport",
                  "coreModules/crm/customer",
                  "coreModules/crm/contact",
                  "coreModules/crm/addr",
                  "coreModules/crm/appoint",
                ],
              },
              {
                type: "category",
                label: "Reports",
                items: ["coreModules/crm/crmReports"],
              },
              {
                type: "category",
                label: "Setup",
                items: [
                  "coreModules/crm/leadSource",
                  "coreModules/crm/opportType",
                  "coreModules/crm/salesStage",
                  "coreModules/crm/salesPer",
                  "coreModules/crm/customerGrp",
                  "coreModules/crm/emailGrp",
                  "coreModules/crm/contract",
                  "coreModules/crm/appointBook",
                ],
              },
              {
                type: "category",
                label: "Marketing",
                items: [
                  "coreModules/crm/campaign",
                  "coreModules/crm/emailCamp",
                  "coreModules/crm/newslett",
                  "coreModules/crm/linkedInSet",
                  "coreModules/crm/twitterSett",
                  "coreModules/crm/socailMedpost",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Articles",
            items: ["basics/settingUp/companySetup"], //set items
          },
          {
            type: "category",
            label: "Videos",
            items: ["basics/settingUp/companySetup"], //set items
          },
        ],
      },
      {
        type: "category",
        label: "Selling",
        items: [
          "coreModules/selling/selling",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Sales",
                items: [
                  "coreModules/selling/quotation",
                  "coreModules/selling/salesOrder",
                  "coreModules/selling/brand",
                  "coreModules/selling/blanket",
                  "coreModules/selling/salesAnaly",
                  "coreModules/selling/salesPartner",
                  "coreModules/selling/terr",
                  "coreModules/selling/coupon",
                ],
              },
              {
                type: "category",
                label: "Setup",
                items: [
                  "coreModules/selling/sellingSett",
                  "coreModules/selling/itemPri",
                  "coreModules/selling/shippinRule",
                  "coreModules/selling/productBund",
                  "coreModules/selling/salesPerAllo",
                  "coreModules/selling/salesTaxesChrg",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Articles",
            items: ["basics/settingUp/companySetup"], //set items
          },
          {
            type: "category",
            label: "Videos",
            items: ["basics/settingUp/companySetup"], //set items
          },
        ],
      },
      {
        type: "category",
        label: "Buying",
        items: [
          "coreModules/buying/buying",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Purchase Cycle",
                items: [
                  "coreModules/buying/reqQuot",
                  "coreModules/buying/purcOrder",
                  "coreModules/buying/purcTaxes",
                ],
              },
              {
                type: "category",
                label: "Supplier",
                items: [
                  "coreModules/buying/supplier",
                  "coreModules/buying/supplierQuot",
                  "coreModules/buying/supplierScore",
                ],
              },
              {
                type: "category",
                label: "Setup",
                items: [
                  "coreModules/buying/buyingSett",
                  "coreModules/buying/supplierGrp",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Articles",
            items: ["basics/settingUp/companySetup"], //set items
          },
          {
            type: "category",
            label: "Videos",
            items: ["basics/settingUp/companySetup"], //set items
          },
        ],
      },
      {
        type: "category",
        label: "Human Resources",
        items: [
          "coreModules/hR/hR",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Employee",
                items: [
                  "coreModules/hR/employee",
                  "coreModules/hR/employType",
                  "coreModules/hR/branch",
                  "coreModules/hR/department",
                  "coreModules/hR/designation",
                  "coreModules/hR/employGrade",
                  "coreModules/hR/employGrp",
                  "coreModules/hR/employHealth",
                ],
              },
              {
                type: "category",
                label: "Attendance",
                items: [
                  "coreModules/hR/attendance",
                  "coreModules/hR/employAtte",
                  "coreModules/hR/attendReq",
                  "coreModules/hR/uploadAtte",
                  "coreModules/hR/autoAttend",
                ],
              },
              {
                type: "category",
                label: "Leaves",
                items: [
                  "coreModules/hR/leaveMng",
                  "coreModules/hR/holidayList",
                  "coreModules/hR/leaveType",
                  "coreModules/hR/leavePrd",
                  "coreModules/hR/leavePolicy",
                  "coreModules/hR/leaveAllo",
                  "coreModules/hR/leaveApp",
                  "coreModules/hR/compenLeave",
                  "coreModules/hR/leaveEnc",
                  "coreModules/hR/leaveBlockList",
                ],
              },
              {
                type: "category",
                label: "Recruitment",
                items: [
                  "coreModules/hR/staffPlan",
                  "coreModules/hR/jobOp",
                  "coreModules/hR/jobApp",
                  "coreModules/hR/jobOffer",
                  "coreModules/hR/appLetter",
                ],
              },
              {
                type: "category",
                label: "Training",
                items: [
                  "coreModules/hR/trainPro",
                  "coreModules/hR/trainEve",
                  "coreModules/hR/trainRes",
                  "coreModules/hR/trainFeed",
                ],
              },
              {
                type: "category",
                label: "Employee Lifecycle",
                items: [
                  "coreModules/hR/emLife",
                  "coreModules/hR/emOn",
                  "coreModules/hR/emPromo",
                  "coreModules/hR/emSep",
                  "coreModules/hR/emTran",
                  "coreModules/hR/emSkill",
                ],
              },
              {
                type: "category",
                label: "Payroll",
                items: [
                  "coreModules/hR/payrollMng",
                  "coreModules/hR/payrollprd",
                  "coreModules/hR/incomeTax",
                  "coreModules/hR/salaryComp",
                  "coreModules/hR/salaryStruc",
                  "coreModules/hR/salaryStrucAsgn",
                  "coreModules/hR/salarySlip",
                  "coreModules/hR/payrollEnt",
                  "coreModules/hR/addSal",
                  "coreModules/hR/retentionBonus",
                  "coreModules/hR/emIncentive",
                ],
              },
              {
                type: "category",
                label: "Employee Tax and Benefits",
                items: [
                  "coreModules/hR/emTaxEmpDecla",
                  "coreModules/hR/emTaxEmpProof",
                  "coreModules/hR/emOtherInc",
                  "coreModules/hR/emBenefApp",
                  "coreModules/hR/emBenefClaim",
                ],
              },
              {
                type: "category",
                label: "Performance",
                items: [
                  "coreModules/hR/appraisal",
                  "coreModules/hR/energyPoint",
                ],
              },
              {
                type: "category",
                label: "Expense Claims",
                items: ["coreModules/hR/expClaim", "coreModules/hR/emAdv"],
              },
              {
                type: "category",
                label: "Loans",
                items: [
                  "coreModules/hR/loanMng",
                  "coreModules/hR/loanType",
                  "coreModules/hR/loanApp",
                  "coreModules/hR/loan",
                ],
              },
              {
                type: "category",
                label: "Shift Management",
                items: ["coreModules/hR/shiftMng"],
              },
              {
                type: "category",
                label: "Fleet Management",
                items: [
                  "coreModules/hR/fleetMng",
                  "coreModules/hR/vehicle",
                  "coreModules/hR/vehiclelog",
                ],
              },
              {
                type: "category",
                label: "Settings",
                items: ["coreModules/hR/hrSettn", "coreModules/hR/dailyWork"],
              },
              {
                type: "category",
                label: "Reports",
                items: ["coreModules/hR/hrReports"],
              },
            ],
          },
          {
            type: "category",
            label: "Articles",
            items: ["basics/settingUp/companySetup"], //set items
          },
          {
            type: "category",
            label: "Videos",
            items: ["basics/settingUp/companySetup"], //set items
          },
        ],
      },
      {
        type: "category",
        label: "Projects",
        items: [
          "coreModules/projects/projects",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Project Management",
                items: [
                  "coreModules/projects/project",
                  "coreModules/projects/tasks",
                  "coreModules/projects/proTemp",
                  "coreModules/projects/proType",
                  "coreModules/projects/proUpdate",
                  "coreModules/projects/proViews",
                ],
              },
              {
                type: "category",
                label: "Time Tracking",
                items: [
                  "coreModules/projects/timesheet",
                  "coreModules/projects/salesIno",
                  "coreModules/projects/salarySlip",
                  "coreModules/projects/activType",
                  "coreModules/projects/activCost",
                ],
              },
              {
                type: "category",
                label: "Reports",
                items: ["coreModules/projects/proReports"],
              },
            ],
          },
          {
            type: "category",
            label: "Articles",
            items: ["basics/settingUp/companySetup"], //set items
          },
          {
            type: "category",
            label: "Videos",
            items: ["basics/settingUp/companySetup"], //set items
          },
        ],
      },
      {
        type: "category",
        label: "Support",
        items: [
          "coreModules/support/support",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Issues",
                items: [
                  "coreModules/support/issue",
                  "coreModules/support/issueType",
                  "coreModules/support/serviceLev",
                ],
              },
              {
                type: "category",
                label: "Maintenance",
                items: [
                  "coreModules/support/serialN",
                  "coreModules/support/warrantyClaim",
                  "coreModules/support/mainteVisit",
                  "coreModules/support/mainteSche",
                ],
              },
              {
                type: "category",
                label: "Settings",
                items: ["coreModules/support/supportSett"],
              },
              {
                type: "category",
                label: "Reports",
                items: ["coreModules/support/supportRep"],
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Asset",
        items: [
          "coreModules/coreAsset/coreAsset",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Asset Management",
                items: [
                  "coreModules/coreAsset/asset",
                  "coreModules/coreAsset/assetCat",
                  "coreModules/coreAsset/assetLoc",
                  "coreModules/coreAsset/assetMov",
                ],
              },
              {
                type: "category",
                label: "Asset Maintenance",
                items: [
                  "coreModules/coreAsset/assetMaintTeam",
                  "coreModules/coreAsset/assetMaint",
                  "coreModules/coreAsset/assetMaintLog",
                  "coreModules/coreAsset/assetRep",
                ],
              },
              {
                type: "category",
                label: "Asset Transactions",
                items: [
                  "coreModules/coreAsset/assetVal",
                  "coreModules/coreAsset/purcAsset",
                  "coreModules/coreAsset/sellAsset",
                ],
              },
              {
                type: "category",
                label: "Discarding Assets",
                items: [
                  "coreModules/coreAsset/assetDep",
                  "coreModules/coreAsset/scrappAsset",
                ],
              },
              {
                type: "category",
                label: "Asset Reports",
                items: ["coreModules/coreAsset/assetReport"],
              },
            ],
          },
          {
            type: "category",
            label: "Videos",
            items: ["basics/settingUp/companySetup"], //set items
          },
        ],
      },
      {
        type: "category",
        label: "Quality",
        items: [
          "coreModules/quality/quality",
          {
            type: "category",
            label: "Goals and Procedure",
            items: [
              "coreModules/quality/qualityGoal",
              "coreModules/quality/qualityProcedure",
            ],
          },
          {
            type: "category",
            label: "Review and Action",
            items: [
              "coreModules/quality/qualityRev",
              "coreModules/quality/qualityAct",
              "coreModules/quality/nonCon",
            ],
          },
          {
            type: "category",
            label: "Meeting",
            items: ["coreModules/quality/qualityMeet"],
          },
          {
            type: "category",
            label: "Feedback",
            items: [
              "coreModules/quality/qualityFeedTemp",
              "coreModules/quality/qualityFeed",
            ],
          },
        ],
      },
    ],
    // Industry Modules
    "Industry Modules": [
      {
        type: "category",
        label: "Manufacturing",
        items: [
          "industryModule/manufact/manufact",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Basic and Setup",
                items: [
                  "industryModule/manufact/onboard",
                  "industryModule/manufact/manuSett",
                  "industryModule/manufact/manuDash",
                ],
              },
              {
                type: "category",
                label: "Bill of Materials",
                items: [
                  "industryModule/manufact/billMate",
                  "industryModule/manufact/op",
                  "industryModule/manufact/workstation",
                  "industryModule/manufact/routing",
                ],
              },
              {
                type: "category",
                label: "Production and Material Planning",
                items: [
                  "industryModule/manufact/workOrder",
                  "industryModule/manufact/jobCard",
                  "industryModule/manufact/productPlan",
                  "industryModule/manufact/downtimeEnt",
                ],
              },
              {
                type: "category",
                label: "Advanced",
                items: [
                  "industryModule/manufact/itemAlt",
                  "industryModule/manufact/subcon",
                  "industryModule/manufact/bomUp",
                  "industryModule/manufact/bomComp",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Manufacturing Reports",
            items: [
              {
                type: "category",
                label: "Planning",
                items: [
                  "industryModule/manufact/demandDriv",
                  "industryModule/manufact/productPlanRep",
                ],
              },
              {
                type: "category",
                label: "Work Order, Quality Inspection & Job Card",
                items: [
                  "industryModule/manufact/workOrderSum",
                  "industryModule/manufact/consMat",
                  "industryModule/manufact/jobCardSum",
                  "industryModule/manufact/qualityInsp",
                  "industryModule/manufact/productAna",
                ],
              },
              {
                type: "category",
                label: "BOM, Operations, and Maintenance",
                items: [
                  "industryModule/manufact/bomSear",
                  "industryModule/manufact/bomStock",
                  "industryModule/manufact/bomOp",
                  "industryModule/manufact/downAna",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Articles",
            items: ["basics/settingUp/companySetup"], //set items
          },
        ],
      },
      {
        type: "category",
        label: "Education",
        items: [
          "industryModule/education/education",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Setup",
                items: [
                  "industryModule/education/program",
                  "industryModule/education/course",
                  "industryModule/education/topic",
                  "industryModule/education/instruct",
                  "industryModule/education/room",
                  "industryModule/education/studentCat",
                  "industryModule/education/acadTeam",
                  "industryModule/education/acadY",
                  "industryModule/education/eduSett",
                ],
              },
              {
                type: "category",
                label: "Student",
                items: [
                  "industryModule/education/student",
                  "industryModule/education/guardian",
                  "industryModule/education/studLog",
                  "industryModule/education/studBatchN",
                  "industryModule/education/studentGrp",
                  "industryModule/education/studentGrpCr",
                ],
              },
              {
                type: "category",
                label: "Admission",
                items: [
                  "industryModule/education/studApp",
                  "industryModule/education/progEnr",
                  "industryModule/education/progEnrTool",
                  "industryModule/education/studAd",
                ],
              },
              {
                type: "category",
                label: "Fees",
                items: [
                  "industryModule/education/fees",
                  "industryModule/education/feeStr",
                  "industryModule/education/feeCat",
                  "industryModule/education/feeSch",
                ],
              },
              {
                type: "category",
                label: "Schedule",
                items: [
                  "industryModule/education/courseSch",
                  "industryModule/education/schTool",
                ],
              },
              {
                type: "category",
                label: "Learning Management System",
                items: [
                  "industryModule/education/settLMS",
                  "industryModule/education/lmsMas",
                  "industryModule/education/navPortal",
                ],
              },
              {
                type: "category",
                label: "Attendance",
                items: [
                  "industryModule/education/studAtt",
                  "industryModule/education/studAttTool",
                  "industryModule/education/studLvApp",
                ],
              },
              {
                type: "category",
                label: "Assessment",
                items: [
                  "industryModule/education/intro",
                  "industryModule/education/assCri",
                  "industryModule/education/assGrp",
                  "industryModule/education/assPlan",
                  "industryModule/education/assResult",
                  "industryModule/education/assResultTool",
                  "industryModule/education/gradingSc",
                ],
              },
              {
                type: "category",
                label: "Tools",
                items: [
                  "industryModule/education/studAttTool",
                  "industryModule/education/assResultTool",
                  "industryModule/education/studentGrpCr",
                  "industryModule/education/progEnrTool",
                  "industryModule/education/courseSchTool",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Healthcare",
        items: [
          "industryModule/healthcare/healthcare",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Basics",
                items: [
                  "industryModule/healthcare/intro",
                  "industryModule/healthcare/patient",
                  "industryModule/healthcare/healthPrac",
                  "industryModule/healthcare/pracSch",
                  "industryModule/healthcare/medDep",
                  "industryModule/healthcare/healthServUnitType",
                  "industryModule/healthcare/healthServUnit",
                  "industryModule/healthcare/medCodeStd",
                  "industryModule/healthcare/medCode",
                ],
              },
              {
                type: "category",
                label: "Consultation Setup",
                items: [
                  "industryModule/healthcare/appType",
                  "industryModule/healthcare/clinProTemp",
                  "industryModule/healthcare/prescription",
                ],
              },
              {
                type: "category",
                label: "Consultation",
                items: [
                  "industryModule/healthcare/patApp",
                  "industryModule/healthcare/clinPro",
                  "industryModule/healthcare/patEnc",
                  "industryModule/healthcare/vital",
                  "industryModule/healthcare/compl",
                  "industryModule/healthcare/feeVali",
                ],
              },
              {
                type: "category",
                label: "Inpatient",
                items: [
                  "industryModule/healthcare/inpaRec",
                  "industryModule/healthcare/inpaMedOrder",
                  "industryModule/healthcare/inpaMedEnt",
                ],
              },
              {
                type: "category",
                label: "Rehabilitation and Physiotherapy",
                items: [
                  "industryModule/healthcare/excType",
                  "industryModule/healthcare/therType",
                  "industryModule/healthcare/therPlanTemp",
                  "industryModule/healthcare/therPlan",
                  "industryModule/healthcare/therSession",
                  "industryModule/healthcare/patAssTemp",
                  "industryModule/healthcare/patAss",
                ],
              },
              {
                type: "category",
                label: "Settings",
                items: ["industryModule/healthcare/healthSett"],
              },
              {
                type: "category",
                label: "Laboratory",
                items: [
                  "industryModule/healthcare/labTTemp",
                  "industryModule/healthcare/labT",
                  "industryModule/healthcare/sample",
                ],
              },
              {
                type: "category",
                label: "Basics",
                items: [
                  "industryModule/healthcare/patHist",
                  "industryModule/healthcare/patAppAna",
                  "industryModule/healthcare/inpaMedOrderRep",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Agriculture",
        items: [
          "industryModule/agri/agri",
          {
            type: "category",
            label: "Topics",
            items: [
              {
                type: "category",
                label: "Crops and Land",
                items: [
                  "industryModule/agri/intro",
                  "industryModule/agri/land",
                  "industryModule/agri/crop",
                  "industryModule/agri/cropCycle",
                ],
              },
              {
                type: "category",
                label: "Disease and Fertilizer",
                items: [
                  "industryModule/agri/disease",
                  "industryModule/agri/fertili",
                ],
              },
              {
                type: "category",
                label: "Analytics",
                items: ["industryModule/agri/analy"],
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Hospitality",
        items: [
          "industryModule/hospitality/hospitality",
          {
            type: "category",
            label: "Manage Hotels",
            items: [
              "industryModule/hospitality/restaurant",
              "industryModule/hospitality/restaurantMenu",
              "industryModule/hospitality/reservations",
              "industryModule/hospitality/orderEnt",
              "industryModule/hospitality/hotelRoom",
            ],
          },
        ],
      },
    ],
  },
};
