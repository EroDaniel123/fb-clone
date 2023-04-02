import "./StoryReel.css"
import Story from "./Story"
function StoryReel() {
  return (
    <div className="storyReel">
      <Story image="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg"
        profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    title = "Sonny Sangha"  />  {/* Story */ }
      
    <Story 
        image='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        profileSrc="https://images.unsplash.com/photo-1670272499232-d6c55af87386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    title="Rafeh Qazi"  />
    
      <Story
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        profileScr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9brb3BvVLxsbx7QRYS9c-sd-lh_MnW2l-IQ&usqp=CAU"
        title='Frankie'  />
    
      <Story
        image='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        profileScr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1Oz2Gasi1R42QQlpdkN6P1pvcb_XJOtCaQ&usqp=CAU"
        title="Aaron Bernath"
      />

      <Story
        image="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
        title="Naz"
      />
      
    </div>

  )
}
export default StoryReel