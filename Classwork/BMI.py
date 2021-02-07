import datetime
print(datetime.datetime.now())
print("Hiiiiiiii!")
print('Peter'.upper())
userAge, userName =30, 'Peter'
print(userAge, userName)

x=100
print(x)
#Virable naming conventions
#3 _  a-z  A-Z
#abc23_

inputNumber=2
input_number='Hello'

x=5
y=2
#+ - / *  // %
print (5//2)
print (5%2)
print (5**2)


#integers, flost, string----
# fromatting strings using the % operator
message = 'The price of the %s laptop is %d USD and the exchange rate is %4.2f USD to 1 EUR'%('Apple',1299,1.23523432)
print(message)

# fromatting strings using the format() method

message1 ='The price of the {0:s} laptop is {1:d} USD and the exchange rate is {2:4.2f} USD to 1 EUR'.format('Apple',1299,1.2352423)
print(message1)

#-----Type casting--- int(), float(), str()

#Cant covert like this:  print(int("HELLO"))      print(int("4.2223"))
print(float("2.098643"))


#----------------LIST: a collection data,

userAge=[23,24,25,26,27,100]
user=[]

print (userAge[2])
print (userAge[-1])
print (userAge[1:4])
print(userAge[ :4])
print(userAge[1:5:2])


# Practice for string formatting
message3 = '{}  is eaier than {} '.format('Python', 'Java')
message4 = '{1}  is eaier than {0} '.format('Python', 'Java')
message5 ='{:16.2f} and {:d}'.format(1.2345432,12)
message6='{}'.format(1.2343321)

print(message3)
print(message4)
print(message5)
print(message6)


#practice for List

myList =[1,2,3,4,"Hello"]

#modify data in the list
myList[1]=10

#delete value in the list

del myList[1]
print (myList)

#add a value at the end
myList.append(1000)

# Pracitce --Assigment
#assign values from position 1 to the end of myList to a new list myList2
# append a new item to myList2 , remove the 3rd item then assign the list to myList3



# Tuple : you can not change the values in Tuple

monthOfYear=("Jan","Feb","Mar")

print(monthOfYear[1])


#Dictionary: a collection of related data PAIRS. Two differnt ways to create a dictionary

myDictionary ={"Peter":38, "John":26, "Joe":68} # can not use same key name
userNameAndAge = dict(Peter=38, John=26, Joe=68, Alivin="Not Available")

userNameAndAge["John"]=62

dictionaryName={}

del userNameAndAge["John"]


myDict = {"One":1.3, 2.5:"Two Points Five", 3:"+", 8.8: 8}
print(myDict)

#assign value to different variables at once
item1,item2,item3 = "red", 100.01, 'Some data'

#Assignment part2
count(sub,[start,[end]])
endswith(suffix,[start,[end]])
find/index(sub,[start,[end]])
isalnum()
isalpha()
isdigit()
islower()
isspace()
istitle()
isupper()
join()
lower()
replace(old,new[,count])
split([sep[,maxsplit]])
splitlines([keepends])
startswith(prefix[,start[,end]])
strip([chars])
upper()

msg = "Hello my friends"
x = msg.upper()
print(x)