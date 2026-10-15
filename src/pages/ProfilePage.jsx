import ProfileCards from "../components/ProfileCards.jsx";

function ProfilePage() {
  return (
    <div className="min-h-screen w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-12">

      <div className="mx-auto w-full max-w-7xl">

      
        <h1 className="mb-8 text-center text-2xl font-bold text-gray-800 sm:mb-10 sm:text-3xl md:text-4xl">
          My Profile Cards
        </h1>

        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">

        
          <ProfileCards
            name="Mark Lee"
            role="PHOTOGRAPHER 📷"
            photo="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700"
            bgColor="bg-gray-200"
            email="mark@example.com"
            details={[
              {
                icon: "🌎",
                text: "Capturing stories worldwide",
              },
              {
                icon: "✨",
                text: "Specialist in city candid street",
              },
              {
                icon: "🎨",
                text: "Light chaser | Color enthusiast",
              },
              {
                icon: "📍",
                text: "Based in NYC | Available globally",
              },
            ]}
          />

          
          <ProfileCards
            name="Eira Sasaki"
            role="DESIGNER 🌸"
            photo="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700"
            bgColor="bg-pink-100"
            email="eira@example.com"
            details={[
              {
                icon: "✨",
                text: "Designer | Artist | Dreamer",
              },
              {
                icon: "🌺",
                text: "Kyoto - Helsinki - New York",
              },
              {
                icon: "🌿",
                text: "Blending nature & minimalism",
              },
              {
                icon: "🏡",
                text: "Creating harmony",
              },
            ]}
          />

          
          <ProfileCards
            name="Jai Patel"
            role="WEB DEVELOPER 💻"
            photo="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700"
            bgColor="bg-emerald-100"
            email="jai@example.com"
            details={[
              {
                icon: "💼",
                text: "Freelance Developer",
              },
              {
                icon: "⚛️",
                text: "React & Next.js Expert",
              },
              {
                icon: "🚀",
                text: "Building performant web apps",
              },
              {
                icon: "📍",
                text: "Remote | India",
              },
            ]}
          />

        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

