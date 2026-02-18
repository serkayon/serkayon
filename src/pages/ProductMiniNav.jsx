import { useNavigate, useParams } from "react-router-dom"
import { Helmet } from 'react-helmet-async';
const tabs = [
  { id: "machine-monitoring", label: "MTG" },
  { id: "predictive-maintenance", label: "Bio-PM" },
  { id: "column-integrity-guard", label: "Bio-CIG" },
]

const ProductMiniNav = () => {
  const navigate = useNavigate()
  const { productId } = useParams()

  return (

    <>
{/* 
         <Helmet>
<title>Our Products - Serkayon Industrial Intelligence</title>
<meta
  name="description"
  content="Explore Serkayon’s industrial solutions including Bio-Predictive Maintenance , Machine Tool-Guard, Bio-Column Integrity Guard"
/>

      </Helmet>
    */}
    <div
      className="
        inline-flex mb-6 rounded-xl p-1
        bg-[#1c1c1c]
        border border-white/10
        shadow-inner
      "
    >
      {tabs.map((tab) => {
        const isActive = tab.id === productId

        return (
          <button
            key={tab.id}
            onClick={() => navigate(`/product/${tab.id}`)}
            className={`
              relative px-5 py-2 rounded-lg text-sm font-medium
              transition-all duration-300
              ${
                isActive
                  ? `
                    bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]
                    text-white
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_8px_rgba(0,0,0,0.6)]
                    border border-white/15
                  `
                  : `
                    text-white/50
                    hover:text-white
                    hover:bg-white/5
                  `
              }
            `}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
     </>
  )
}

export default ProductMiniNav