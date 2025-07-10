# 🚀 Custom CI/CD Pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy

This guide demonstrates how to create a custom CI/CD pipeline in AWS to automate building, testing, and deploying code from GitHub using **CodePipeline**, **CodeBuild**, and **CodeDeploy**.

---

## 📌 Prerequisites

- AWS account
- GitHub repository with code and a `buildspec.yml` file in the root
- IAM permissions to create roles and pipelines
- An S3 bucket for storing build artifacts (optional but recommended)

---

## 🔧 Step-by-Step Setup

### 1. **Create a Custom Pipeline in CodePipeline**

Go to **CodePipeline** → Click on **Create pipeline** → Select **Custom pipeline**

<img width="1920" height="1080" alt="Screenshot (548)" src="https://github.com/user-attachments/assets/ccc1c238-5035-4c39-8ce1-dd3a0edc7e27" />

---

### 2. **Configure Pipeline Settings**

- Enter **pipeline name**
- Choose **execution mode**
- Select or create a **service role**

<img width="1920" height="1080" alt="Screenshot (549)" src="https://github.com/user-attachments/assets/c306dc7e-d7c8-4b96-8cc6-bb901f425a40" />

<img width="1920" height="1080" alt="Screenshot (550)" src="https://github.com/user-attachments/assets/c47ed018-ba25-463b-a2dd-0d71af1c0356" />

---

### 3. **Set Up Source Provider**

- Select **GitHub**
- Connect to GitHub
- Choose **repository and branch**
- Choose **artifact format**

<img width="1920" height="1080" alt="Screenshot (551)" src="https://github.com/user-attachments/assets/0125b8b1-12a7-4acc-a306-cedf509f1f81" />
<img width="1920" height="1080" alt="Screenshot (552)" src="https://github.com/user-attachments/assets/27735ce9-af1d-49b7-a741-8d3a533b2c5c" />

---

### 4. **Configure Build Stage with CodeBuild**

- Choose **CodeBuild**
- Create a new project for testing, compiling, and building code

<img width="1920" height="1080" alt="Screenshot (553)" src="https://github.com/user-attachments/assets/db8ed700-3be7-4feb-9153-364a21b59273" />

- Configure **compute type**, **OS**, and **runtime**

<img width="1920" height="1080" alt="Screenshot (554)" src="https://github.com/user-attachments/assets/0c9167ea-a722-440e-989a-cce4eed5076e" />

---

### 5. **Set Up BuildSpec and Permissions**

- Use existing role or create new one
- Choose **"Use a buildspec file"** (auto-detects `buildspec.yml` in repo root)

<img width="1920" height="1080" alt="Screenshot (555)" src="https://github.com/user-attachments/assets/b4c2f3af-0aba-4189-b593-6c0763ed7ba0" />
<img width="1920" height="1080" alt="Screenshot (556)" src="https://github.com/user-attachments/assets/8483a417-16bc-4b34-909a-1d780f30ee44" />

- Select the CodeBuild project

<img width="1920" height="1080" alt="Screenshot (557)" src="https://github.com/user-attachments/assets/fd60d2ef-33b6-4a4c-bbd1-17d630fec3dc" />
<img width="1920" height="1080" alt="Screenshot (558)" src="https://github.com/user-attachments/assets/8cf24c3a-583e-46ed-964b-2494bffc6a33" />

---

### 6. **Add Tests (Optional)**

Include tests in your CI/CD flow by defining them in `buildspec.yml`.

<img width="1920" height="1080" alt="Screenshot (559)" src="https://github.com/user-attachments/assets/8946de9b-574b-4ca5-a897-28d6d023626e" />

---

### 7. **Set Up Deploy Stage**

- Select **deployment service** (e.g., S3 or EC2 via CodeDeploy)
- Choose destination bucket or deployment group

<img width="1920" height="1080" alt="Screenshot (560)" src="https://github.com/user-attachments/assets/6378fde6-c63d-47df-b3f1-54ff21f95843" />

- Enable **"Extract file before deploy"** if your build artifact is a `.zip` file

<img width="1920" height="1080" alt="Screenshot (561)" src="https://github.com/user-attachments/assets/2b72c2b9-265e-47d7-8ab0-e1bb998227ea" />

---

### 8. **Pipeline Execution and Success**

- Pipeline runs: fetches from GitHub, builds, tests, deploys

<img width="1920" height="1080" alt="Screenshot (562)" src="https://github.com/user-attachments/assets/8baa2b39-fa65-4064-89d0-c2d86acc9223" />

- ✅ CI/CD pipeline completed successfully

<img width="1920" height="1080" alt="Screenshot (563)" src="https://github.com/user-attachments/assets/c878a2b2-7bed-41e7-beb2-df23be656bae" />

---

## 🎯 Output

<img width="1920" height="1080" alt="Screenshot (564)" src="https://github.com/user-attachments/assets/1c6e74b0-ad6e-496e-be0b-4c71c7dc27fb" />

---

## 🔁 Make Changes in GitHub and Commit

Once changes are pushed to the configured GitHub branch, the pipeline will automatically re-trigger and follow the build–test–deploy workflow.

---
