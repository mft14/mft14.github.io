import os
from pathlib import Path  #core python module

html_name = "menu.html"

def generate_links(user_path):

    a_target = ""
    a_class=""
    output = ""
    counter = 0
    br = ""
    path = user_path #pass the new path
    a_target = " target=\"_blank\""
    css = """
    <style>
    a { color: #02b1f7; display: block; text-decoration: none;font-family: \'Courier New\', Courier, monospace !important; display:block; }
    a:hover { color: black; background-color: #02b1f7; }
    ::-webkit-scrollbar { width: 10px; height: 14px;}
    ::-webkit-scrollbar-track { /*border: 1px solid #15aaea; */ background-color: black; }
    ::-webkit-scrollbar-thumb { background: #15aaea; }
    </style>

    """
    list_files = os.listdir(path) #list all files in an array
    list_files = sorted(list_files) #sort alphabetically

    file = open(html_name, "w") #make new file
    file.write(str(css)) #styling because within iframe there is no CSS

    for i in range(0,len(list_files)): #list all files using array length

        if(list_files[i][0] == '.'): #if first letter has a dot
            pass
        elif(list_files[i].__contains__(html_name)):
            pass
        elif(list_files[i].__contains__("index.html")):
            pass
        elif( list_files[i].__contains__('.txt') or list_files[i].__contains__('.html') ):
            a_href=" href=\""+list_files[i]+"\""
            link_name = list_files[i][0:list_files[i].find('.')]#substring from 0 to dot, title makes uppercase
            output = "<a"+a_target+a_class+a_href+">"+link_name+"</a>"+br #assemble the link

            file.write(str(output)+"\n")
            print(str(output))
            counter = counter + 1

    file.write("\n\n</body>")
    file.close
    print("\nSuccessfully created " + str(counter) + " link(s)! Created --> "+html_name)

######## Program starts here

print("HTML Link Creator will create quickly links to all your files in the current directory, where this .py has been executed!\n")
print("----------------------")
path = Path.cwd()
generate_links(path)#cwd Path and go
