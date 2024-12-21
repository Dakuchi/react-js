# Full-Stack Apps with AWS and React
## 1. Create project
####
    npx create-react-app todo

![Screenshot 2024-12-21 170127](https://github.com/user-attachments/assets/f2eef3c8-6ee7-4bcf-9529-d392aaa7e909)

####
    cd todo
    npm start

![Screenshot 2024-12-21 172543](https://github.com/user-attachments/assets/06776e7a-2b84-4d43-bf70-c1e2f3db8af4)

## 2. Install and confiure amplify cli
####
    sudo npm install -g @aws-amplify/cli

![Screenshot 2024-12-21 173729](https://github.com/user-attachments/assets/0e358f17-3bd9-4823-bb6b-991457cce6d1)

####
    sudo amplify confiure

* Create new aws user

![Screenshot 2024-12-21 174430](https://github.com/user-attachments/assets/2db18da5-7114-41f4-9c51-2763ad113602)
* Attach policy directly for amplify'

![Screenshot 2024-12-21 174657](https://github.com/user-attachments/assets/17d5e785-34e9-47d6-8b54-83963e53e9d4)
* Create access key for new user

![Screenshot 2024-12-21 175012](https://github.com/user-attachments/assets/d3983008-0655-47e7-81df-a726f85d3458)
* Add amplify user credential

![Screenshot 2024-12-21 175249](https://github.com/user-attachments/assets/175d3194-1d9d-4475-9dfc-912e142f4b92)

### 3. Initialize amplify
####
    amplify init

![Screenshot 2024-12-21 180143](https://github.com/user-attachments/assets/bd1b18cd-dcf4-497c-8a28-54c70119da66)
![Screenshot 2024-12-21 180331](https://github.com/user-attachments/assets/172d2836-50e6-4358-8a56-94a8eec0f597)
![Screenshot 2024-12-21 183841](https://github.com/user-attachments/assets/4accea6a-f571-4e4f-b3a2-16f0f6722c0f)

### 4. Publish amplify hosting
####
    amplify add hosting

![Screenshot 2024-12-21 180628](https://github.com/user-attachments/assets/15015b7c-0f5f-440a-bf37-1bc67978ea57)
![Screenshot 2024-12-21 183802](https://github.com/user-attachments/assets/727649cd-9371-494b-a342-0980c497d45e)

####
    amplify publish

![Screenshot 2024-12-21 181506](https://github.com/user-attachments/assets/a086efcf-ac3d-4f23-866a-063557e9235c)
![Screenshot 2024-12-21 181434](https://github.com/user-attachments/assets/ce10c718-2700-427b-986b-3d3eb16871d7)


### 4. Add user authen to AWS project
####
    amplify add auth
    amplify push

![Screenshot 2024-12-21 183912](https://github.com/user-attachments/assets/90c8e192-6bd4-48d2-98dc-9f67e607fb09)
![Screenshot 2024-12-21 184006](https://github.com/user-attachments/assets/13d4631f-67ff-4bd3-a454-ac5353dbbaa8)

### 5. Add user authen to reactjs app
####
    npm install @aws-amplify/ui-react aws-amplify
* Update app.js with new user auth

![Screenshot 2024-12-21 213955](https://github.com/user-attachments/assets/d527050e-55fd-4a03-8c65-392473ba6f70)
![Screenshot 2024-12-21 214326](https://github.com/user-attachments/assets/126be4c0-44b7-440d-80d6-c602574726b0)

### 6. Create DynamoDB as data source for GraphQL API
![Screenshot 2024-12-21 220524](https://github.com/user-attachments/assets/da8b7be8-f4d2-4f92-a669-9125975db734)

### 7. Create GraphQL API with amplify
    amplify add api

![Screenshot 2024-12-21 221349](https://github.com/user-attachments/assets/987e7601-e1d8-48eb-b52a-6b501a26ddc2)
* Update graphql schema
![Screenshot 2024-12-21 223532](https://github.com/user-attachments/assets/7f08d543-a4a5-4244-9f8a-d02bed38a2ef)

####
    amplify push

![Screenshot 2024-12-21 222158](https://github.com/user-attachments/assets/b065b0cc-699d-4cf9-a958-8321a6887fce)

* Test schema on Appsync
![Screenshot 2024-12-21 223731](https://github.com/user-attachments/assets/8aa0ba5c-4fe0-48be-aa58-bda4ec9ac0a6)
![Screenshot 2024-12-21 224501](https://github.com/user-attachments/assets/2204f39f-35a4-4a6d-8841-ceb1e5ab20f1)
![Screenshot 2024-12-21 224606](https://github.com/user-attachments/assets/2fef2810-8f66-40e2-a583-a125b5d7a5ae)

### 8. Add API to App    
* Create todo mutation
![Screenshot 2024-12-21 230047](https://github.com/user-attachments/assets/eea43fa0-7aa3-431a-977f-d89461dfe224)
![Screenshot 2024-12-21 230108](https://github.com/user-attachments/assets/aecf6718-6e0b-4290-b5f3-23218e7b0505)
![Screenshot 2024-12-21 230139](https://github.com/user-attachments/assets/ec39f1c4-f1cc-44a7-9446-35a6a4abb5be)

* Fetch todo queries
* Update todo item
* Delete todo item

![image](https://github.com/user-attachments/assets/de26a870-25eb-4893-a5ee-ea4c38c41466)
![image](https://github.com/user-attachments/assets/57beaa55-b0c5-40ca-8e36-f6a993f4803a)
![image](https://github.com/user-attachments/assets/3e4a5f12-666b-4f36-aa96-c285789c5a8d)
![image](https://github.com/user-attachments/assets/cd6f96e7-dd34-411d-8acd-913595971aef)
![image](https://github.com/user-attachments/assets/54fe7e6d-23ba-4cf6-802a-a237bc607894)


