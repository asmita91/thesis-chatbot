from pymongo import MongoClient

def cleanup_users_collection(database_name):
    # Connect to MongoDB
    client = MongoClient('mongodb://localhost:27017/')

    # Select the target database
    db = client[database_name]

    # Define the filter to keep only users with institution 'texas'
    filter_query = {'institution': 'texas'}

    # Find user IDs to keep
    users_to_keep = db.users.find(filter_query, {'_id': 1})
    user_ids_to_keep = [user['_id'] for user in users_to_keep]

    # Define the delete filter to remove users not in the list of user_ids_to_keep
    delete_filter = {'_id': {'$nin': user_ids_to_keep}}

    # Remove users that do not match the filter
    result = db.users.delete_many(delete_filter)

    print(f"Deleted {result.deleted_count} users from '{database_name}' who do not belong to institution 'texas'")

# Main function
def main():
    database_name = 'swp_database'
    cleanup_users_collection(database_name)

main()