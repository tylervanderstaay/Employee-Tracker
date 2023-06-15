const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table')

const express = require('express');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'rootroot',
        database: 'employees_db'
    }
);

const PORT = process.env.PORT || 3001;
const app = express();

async function init() {
    inquirer.createPromptModule([
        {
            type:'list',
            name:'mainChoice',
            message: 'Why are we here',
            choices: [
                'View Departments',
                'View Roles',
                'View Employees',
                'Add Department',
                'Add Emp. Role',
                'Add Employee',
                'Update Emp. Role',
                'Quit'
            ]
        }
    ]);
    switch (answers.mainChoice) {
        case 'View Departments':
            const depts = await view.department('name', 'department');
            console.table(depts);
            break;
        case 'View Roles':
            const roles = await view.role
    }
}