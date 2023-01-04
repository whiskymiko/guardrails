## Postman
### Prerequisite 
The test user bbb@bb.bb has to be available in the DB.

### Import files
The Integration Testing Exercise consists of two files:
- GuardRails.postman_collection.json
- Env.postman_environment.json

### Structure
The collection file contains three folders:
- Test Scenario 1 - Sign in the user, add 1 item to the basket, verify that 1 item is in the basket
- Test Scenario 2 - Same as previous scenario but add 2 items instead of 1 to the basket
- Test Scenario 3 - Same as previous scenario but delete 1 item and validate that only 1 item remains in the basket

Each folder is responsible for testing a particular flow. Folders are independent and can be run in any sequence.

### Run
After importing both files make sure that the Env (imported) environment is selected for the collection as it has predefine url, basket ID and keeps the auth token.
You can Run the entire collection, or a folder of your choice.
