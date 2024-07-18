import UserProfile from "./templates/TemplateList"

const initApp = async (): Promise<void> => {
  const userProfile = UserProfile.instance;

  const generateBtn = document.getElementById('Generate') as HTMLButtonElement;

  generateBtn.addEventListener('click', async (): Promise<void> => {
    try {
      generateBtn.textContent = 'Processigng...'
      await userProfile.getData()
      generateBtn.textContent = 'Generete Another'
    } catch (error: any) {
      console.error(error.message)
      setTimeout(() => {
        location.reload()
      }, 2000);
    }
  })

  await userProfile.getData()
}

document.addEventListener('DOMContentLoaded', initApp)