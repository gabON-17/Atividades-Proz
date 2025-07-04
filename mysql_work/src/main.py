import mysql.connector
import utils.view
import os

conection = mysql.connector.connect(
    host = 'localhost',
    port = 3306,
    user = 'root',
    password = '',
    database = 'school'
)

cursor = conection.cursor()

cursor.execute('''
    select 
	    r.name_student, r.email_student, courses.title, courses.duration_hours,
        r.date_registered, r.status 
	from registered r
    join courses on courses.id = r.id_course;
''')
table = cursor.fetchall()

values = utils.view.getValues(table)

os.system('cls')
utils.view.title('DADOS')
for item in values:
    utils.view.showTable(item)