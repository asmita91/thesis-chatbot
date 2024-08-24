# # import bcrypt

# # # Generate a salt
# # salt = bcrypt.gensalt()

# # # Plain text password
# # plain_password = b'asmita123'

# # # Hash the password using the generated salt
# # hashed = bcrypt.hashpw(plain_password, salt)

# # print(hashed)



# import bcrypt
# # Retrieved hash from database
# stored_hash = '$2b$12$Hx7khMRhIKJY8t7aPmFWmObDEZZzIXeYYC7AC5eq8QsWX0madkIom'


# # Password provided by the user for verification
# plain_password = "asmita123"

# # Check if the provided password matches the stored hash
# if bcrypt.checkpw(plain_password.encode('utf-8'), stored_hash.encode('utf-8')):
#     print("Password matches")
# else:
#     print("Password does not match")



from django.contrib.auth.models import User

user = User.objects.get(username='your_username')
print(user.is_active)
