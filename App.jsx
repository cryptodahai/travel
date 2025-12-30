import { useState } from 'react'
import './App.css'

// 国内旅游景点数据
const attractions = [
  {
    name: '北京故宫',
    city: '北京',
    category: '历史文化',
    region: '北方',
    transportation: [
      {
        type: '飞机',
        duration: '约2.5小时',
        price: '500-1500元',
        detail: '从成都双流国际机场或天府国际机场出发，到达北京首都国际机场或大兴国际机场，然后乘坐地铁或出租车前往市区。'
      },
      {
        type: '高铁',
        duration: '约7-8小时',
        price: '680-1200元',
        detail: '从成都东站乘坐高铁直达北京西站或北京南站，全程约7-8小时，建议选择复兴号列车。'
      },
      {
        type: '自驾',
        duration: '约18-20小时',
        price: '约1500元（油费+过路费）',
        detail: '沿京昆高速或包茂高速行驶，全程约1800公里，建议分两天行驶，途经西安或郑州休息。'
      }
    ]
  },
  {
    name: '上海外滩',
    city: '上海',
    category: '现代都市',
    region: '南方',
    transportation: [
      {
        type: '飞机',
        duration: '约2小时',
        price: '400-1200元',
        detail: '从成都双流或天府机场出发，到达上海浦东或虹桥机场，浦东机场可乘坐磁悬浮列车直达市区。'
      },
      {
        type: '高铁',
        duration: '约11-12小时',
        price: '850-1500元',
        detail: '从成都东站乘坐高铁直达上海虹桥站，全程约11-12小时，建议选择白天班次。'
      },
      {
        type: '动车+飞机',
        duration: '约6小时',
        price: '600-1000元',
        detail: '先从成都坐动车到重庆（约1.5小时），再从重庆坐飞机到上海（约2小时），性价比较高。'
      }
    ]
  },
  {
    name: '杭州西湖',
    city: '杭州',
    category: '自然风光',
    region: '南方',
    transportation: [
      {
        type: '飞机',
        duration: '约2小时',
        price: '400-1100元',
        detail: '从成都双流或天府机场出发，到达杭州萧山国际机场，然后乘坐地铁1号线直达市区。'
      },
      {
        type: '高铁',
        duration: '约10-11小时',
        price: '780-1300元',
        detail: '从成都东站乘坐高铁直达杭州东站，全程约10-11小时，建议选择G字头列车。'
      },
      {
        type: '飞机+高铁',
        duration: '约5小时',
        price: '500-900元',
        detail: '先从成都坐飞机到武汉（约1.5小时），再从武汉坐高铁到杭州（约4小时）。'
      }
    ]
  },
  {
    name: '成都大熊猫基地',
    city: '成都',
    category: '自然动物',
    region: '西南',
    transportation: [
      {
        type: '地铁+公交',
        duration: '约1小时',
        price: '5-10元',
        detail: '乘坐地铁3号线到熊猫大道站，然后换乘公交198路或熊猫专线直达景区。'
      },
      {
        type: '出租车',
        duration: '约40分钟',
        price: '50-80元',
        detail: '直接从市区打车前往，建议使用网约车平台，价格透明。'
      },
      {
        type: '景区直通车',
        duration: '约50分钟',
        price: '20-30元',
        detail: '在宽窄巷子、春熙路等景点有直达熊猫基地的旅游直通车，含往返车票。'
      }
    ]
  },
  {
    name: '西安兵马俑',
    city: '西安',
    category: '历史文化',
    region: '北方',
    transportation: [
      {
        type: '高铁',
        duration: '约3.5小时',
        price: '263-515元',
        detail: '从成都东站乘坐高铁直达西安北站，全程约3.5小时，出站后可乘坐地铁2号线到市区。'
      },
      {
        type: '飞机',
        duration: '约1.5小时',
        price: '300-800元',
        detail: '从成都双流或天府机场出发，到达西安咸阳国际机场，然后乘坐机场大巴或地铁直达市区。'
      },
      {
        type: '普通火车',
        duration: '约11-14小时',
        price: '128-350元',
        detail: '从成都站或成都东站乘坐普通火车前往西安，价格实惠，适合预算有限的旅行者。'
      }
    ]
  },
  {
    name: '重庆洪崖洞',
    city: '重庆',
    category: '民俗风情',
    region: '西南',
    transportation: [
      {
        type: '高铁',
        duration: '约1.5小时',
        price: '96-154元',
        detail: '从成都东站乘坐高铁直达重庆北站或重庆西站，全程约1.5小时，出站后可乘坐地铁前往洪崖洞。'
      },
      {
        type: '动车',
        duration: '约2小时',
        price: '76-116元',
        detail: '从成都东站乘坐动车前往重庆，价格比高铁便宜，时间相差不大。'
      },
      {
        type: '汽车',
        duration: '约4小时',
        price: '100-150元',
        detail: '从成都昭觉寺汽车站或茶店子汽车站乘坐大巴前往重庆，全程约4小时，到达重庆菜园坝或龙头寺汽车站。'
      },
      {
        type: '自驾',
        duration: '约3.5小时',
        price: '约200元（油费+过路费）',
        detail: '沿成渝高速或成安渝高速行驶，全程约300公里，路况良好。'
      }
    ]
  },
  {
    name: '张家界天门山',
    city: '张家界',
    category: '自然风光',
    region: '南方',
    transportation: [
      {
        type: '飞机',
        duration: '约1.5小时',
        price: '400-1000元',
        detail: '从成都双流或天府机场出发，到达张家界荷花国际机场，然后乘坐机场大巴或出租车前往市区。'
      },
      {
        type: '高铁',
        duration: '约7-8小时',
        price: '450-800元',
        detail: '从成都东站乘坐高铁到怀化南站，然后换乘高铁到张家界西站，全程约7-8小时。'
      },
      {
        type: '飞机+汽车',
        duration: '约4小时',
        price: '500-900元',
        detail: '先从成都坐飞机到长沙（约1.5小时），再从长沙坐汽车到张家界（约2.5小时）。'
      }
    ]
  },
  {
    name: '三亚亚龙湾',
    city: '三亚',
    category: '海滨度假',
    region: '南方',
    transportation: [
      {
        type: '飞机',
        duration: '约3小时',
        price: '800-2000元',
        detail: '从成都双流或天府机场出发，到达三亚凤凰国际机场，然后乘坐机场大巴或出租车前往亚龙湾。'
      },
      {
        type: '高铁+飞机',
        duration: '约8小时',
        price: '700-1500元',
        detail: '先从成都坐高铁到广州（约10小时），再从广州坐飞机到三亚（约1.5小时），适合时间充裕的旅行者。'
      },
      {
        type: '转机航班',
        duration: '约5-6小时',
        price: '600-1200元',
        detail: '从成都出发经海口或深圳转机到三亚，价格相对直飞更便宜。'
      }
    ]
  },
  {
    name: '黄山风景区',
    city: '黄山',
    category: '自然风光',
    region: '南方',
    transportation: [
      {
        type: '飞机',
        duration: '约2小时',
        price: '500-1200元',
        detail: '从成都双流或天府机场出发，到达黄山屯溪国际机场，然后乘坐机场大巴到黄山风景区。'
      },
      {
        type: '高铁',
        duration: '约12-13小时',
        price: '900-1600元',
        detail: '从成都东站乘坐高铁到合肥南站，然后换乘高铁到黄山北站，全程约12-13小时。'
      },
      {
        type: '飞机+高铁',
        duration: '约6小时',
        price: '700-1100元',
        detail: '先从成都坐飞机到杭州（约2小时），再从杭州坐高铁到黄山（约1.5小时）。'
      }
    ]
  },
  {
    name: '苏州园林',
    city: '苏州',
    category: '古典园林',
    region: '南方',
    transportation: [
      {
        type: '飞机',
        duration: '约2小时',
        price: '400-1100元',
        detail: '从成都双流或天府机场出发，到达上海虹桥机场，然后乘坐高铁到苏州（约30分钟）。'
      },
      {
        type: '高铁',
        duration: '约12-13小时',
        price: '900-1600元',
        detail: '从成都东站乘坐高铁直达苏州北站，全程约12-13小时，建议选择白天班次。'
      },
      {
        type: '飞机+地铁',
        duration: '约4小时',
        price: '500-1000元',
        detail: '先从成都坐飞机到南京（约2小时），再从南京坐高铁到苏州（约1小时）。'
      }
    ]
  },
  {
    name: '厦门鼓浪屿',
    city: '厦门',
    category: '海岛风情',
    region: '南方',
    transportation: [
      {
        type: '飞机',
        duration: '约2.5小时',
        price: '600-1500元',
        detail: '从成都双流或天府机场出发，到达厦门高崎国际机场，然后乘坐地铁或出租车前往鼓浪屿码头。'
      },
      {
        type: '高铁',
        duration: '约14-15小时',
        price: '1000-1800元',
        detail: '从成都东站乘坐高铁到厦门北站，全程约14-15小时，建议选择动卧车次。'
      },
      {
        type: '飞机+高铁',
        duration: '约7小时',
        price: '700-1200元',
        detail: '先从成都坐飞机到深圳（约2小时），再从深圳坐高铁到厦门（约3.5小时）。'
      }
    ]
  },
  {
    name: '桂林漓江',
    city: '桂林',
    category: '自然风光',
    region: '南方',
    transportation: [
      {
        type: '飞机',
        duration: '约1.5小时',
        price: '300-900元',
        detail: '从成都双流或天府机场出发，到达桂林两江国际机场，然后乘坐机场大巴到市区。'
      },
      {
        type: '高铁',
        duration: '约8-9小时',
        price: '500-900元',
        detail: '从成都东站乘坐高铁到贵阳北站，然后换乘高铁到桂林北站，全程约8-9小时。'
      },
      {
        type: '飞机+汽车',
        duration: '约5小时',
        price: '400-800元',
        detail: '先从成都坐飞机到重庆（约1小时），再从重庆坐飞机到桂林（约1.5小时）。'
      }
    ]
  },
  {
    name: '青岛八大关',
    city: '青岛',
    category: '历史建筑',
    region: '北方',
    transportation: [
      {
        type: '飞机',
        duration: '约2.5小时',
        price: '600-1500元',
        detail: '从成都双流或天府机场出发，到达青岛流亭国际机场，然后乘坐地铁或出租车前往市区。'
      },
      {
        type: '高铁',
        duration: '约14-15小时',
        price: '1000-1800元',
        detail: '从成都东站乘坐高铁到济南西站，然后换乘高铁到青岛站，全程约14-15小时。'
      },
      {
        type: '飞机+高铁',
        duration: '约6小时',
        price: '700-1200元',
        detail: '先从成都坐飞机到郑州（约1.5小时），再从郑州坐高铁到青岛（约5小时）。'
      }
    ]
  },
  {
    name: '拉萨布达拉宫',
    city: '拉萨',
    category: '宗教文化',
    region: '西南',
    transportation: [
      {
        type: '飞机',
        duration: '约2.5小时',
        price: '1200-3000元',
        detail: '从成都双流或天府机场出发，直飞拉萨贡嘎国际机场，建议提前服用抗高原反应药物。'
      },
      {
        type: '火车',
        duration: '约36小时',
        price: '335-865元',
        detail: '从成都西站乘坐Z字头直达列车前往拉萨，全程约36小时，可逐步适应高原反应，沿途欣赏青藏铁路风光。'
      },
      {
        type: '自驾',
        duration: '约7-10天',
        price: '约3000-5000元',
        detail: '沿川藏南线（318国道）或川藏北线（317国道）自驾前往，沿途风景壮丽，但路况复杂，建议组队前往。'
      }
    ]
  },
  {
    name: '敦煌莫高窟',
    city: '敦煌',
    category: '历史文化',
    region: '西北',
    transportation: [
      {
        type: '飞机',
        duration: '约2.5小时',
        price: '800-2000元',
        detail: '从成都双流或天府机场出发，直飞敦煌莫高国际机场，或经兰州转机。'
      },
      {
        type: '火车',
        duration: '约24小时',
        price: '263-700元',
        detail: '从成都站乘坐火车到柳园站，然后换乘汽车到敦煌市区，全程约24小时。'
      },
      {
        type: '飞机+汽车',
        duration: '约6小时',
        price: '700-1500元',
        detail: '先从成都坐飞机到兰州（约1.5小时），再从兰州坐火车到敦煌（约12小时）。'
      }
    ]
  },
  {
    name: '九寨沟风景区',
    city: '九寨沟',
    category: '自然风光',
    region: '西南',
    transportation: [
      {
        type: '飞机',
        duration: '约40分钟',
        price: '200-800元',
        detail: '从成都双流或天府机场出发，直飞九寨沟黄龙机场，然后乘坐机场大巴到九寨沟景区。'
      },
      {
        type: '汽车',
        duration: '约8-9小时',
        price: '150-200元',
        detail: '从成都茶店子汽车站乘坐大巴直达九寨沟沟口，全程约8-9小时，路况良好。'
      },
      {
        type: '自驾',
        duration: '约7-8小时',
        price: '约400元（油费+过路费）',
        detail: '沿都汶高速和川主寺方向行驶，全程约400公里，沿途可欣赏汶川、茂县风光。'
      }
    ]
  },
  {
    name: '大理古城',
    city: '大理',
    category: '民俗风情',
    region: '西南',
    transportation: [
      {
        type: '飞机',
        duration: '约2小时',
        price: '500-1200元',
        detail: '从成都双流或天府机场出发，直飞大理荒草坝机场，然后乘坐机场大巴到大理古城。'
      },
      {
        type: '高铁',
        duration: '约9-10小时',
        price: '500-900元',
        detail: '从成都东站乘坐高铁到昆明南站，然后换乘高铁到大理站，全程约9-10小时。'
      },
      {
        type: '飞机+高铁',
        duration: '约5小时',
        price: '600-1000元',
        detail: '先从成都坐飞机到昆明（约1.5小时），再从昆明坐高铁到大理（约2小时）。'
      }
    ]
  },
  {
    name: '丽江古城',
    city: '丽江',
    category: '民俗风情',
    region: '西南',
    transportation: [
      {
        type: '飞机',
        duration: '约2小时',
        price: '600-1500元',
        detail: '从成都双流或天府机场出发，直飞丽江三义国际机场，然后乘坐机场大巴到丽江古城。'
      },
      {
        type: '高铁',
        duration: '约10-11小时',
        price: '550-1000元',
        detail: '从成都东站乘坐高铁到昆明南站，然后换乘高铁到丽江站，全程约10-11小时。'
      },
      {
        type: '飞机+汽车',
        duration: '约6小时',
        price: '700-1200元',
        detail: '先从成都坐飞机到西昌（约1小时），再从西昌坐汽车到丽江（约8小时），适合喜欢沿途风景的旅行者。'
      }
    ]
  },
  {
    name: '长白山天池',
    city: '长白山',
    category: '自然风光',
    region: '北方',
    transportation: [
      {
        type: '飞机',
        duration: '约4小时',
        price: '1000-2500元',
        detail: '从成都双流或天府机场出发，经北京或上海转机到长白山机场，然后乘坐机场大巴到长白山景区。'
      },
      {
        type: '高铁+飞机',
        duration: '约12小时',
        price: '800-2000元',
        detail: '先从成都坐高铁到沈阳（约14小时），再从沈阳坐飞机到长白山（约1小时）。'
      },
      {
        type: '飞机+汽车',
        duration: '约6小时',
        price: '900-1800元',
        detail: '先从成都坐飞机到长春（约3小时），再从长春坐汽车到长白山（约4小时）。'
      }
    ]
  },
  {
    name: '香港维多利亚港',
    city: '香港',
    category: '现代都市',
    region: '南方',
    transportation: [
      {
        type: '飞机',
        duration: '约3小时',
        price: '1000-3000元',
        detail: '从成都双流或天府机场出发，直飞香港国际机场，然后乘坐机场快线或地铁前往市区。'
      },
      {
        type: '高铁',
        duration: '约10-12小时',
        price: '800-1500元',
        detail: '从成都东站乘坐高铁到深圳北站，然后换乘地铁或高铁到香港西九龙站，全程约10-12小时。'
      },
      {
        type: '飞机+轮渡',
        duration: '约5小时',
        price: '900-2000元',
        detail: '先从成都坐飞机到珠海（约2.5小时），再从珠海乘坐港珠澳大桥穿梭巴士到香港。'
      }
    ]
  }
]

function App() {
  const [selectedAttraction, setSelectedAttraction] = useState(null)
  const [memo, setMemo] = useState([])
  const [customAttractions, setCustomAttractions] = useState([])
  const [showCustomForm, setShowCustomForm] = useState(false)
  const [customForm, setCustomForm] = useState({
    name: '',
    city: '',
    category: '',
    region: '南方'
  })
  const [selectedRegion, setSelectedRegion] = useState('全部')
  const regions = ['全部', '南方', '北方', '西北', '西南']

  // 随机选择景点（包括自定义景点，支持区域筛选）
  const randomizeAttraction = () => {
    const allAttractions = [...attractions, ...customAttractions]
    const filteredAttractions = selectedRegion === '全部' 
      ? allAttractions 
      : allAttractions.filter(attraction => attraction.region === selectedRegion)
    
    if (filteredAttractions.length === 0) {
      alert(`当前选择的${selectedRegion}区域没有可用景点，请尝试其他区域或添加自定义景点！`)
      return
    }
    
    const randomIndex = Math.floor(Math.random() * filteredAttractions.length)
    const attraction = filteredAttractions[randomIndex]
    setSelectedAttraction(attraction)
    // 添加到备忘录
    setMemo([...memo, {
      ...attraction,
      time: new Date().toLocaleString()
    }])
  }

  // 清空备忘录
  const clearMemo = () => {
    setMemo([])
  }

  // 处理自定义表单输入
  const handleCustomFormChange = (e) => {
    const { name, value } = e.target
    setCustomForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 添加自定义景点
  const addCustomAttraction = (e) => {
    e.preventDefault()
    if (!customForm.name || !customForm.city || !customForm.category) return

    // 创建自定义景点对象，包含默认交通攻略
    const newCustomAttraction = {
      name: customForm.name,
      city: customForm.city,
      category: customForm.category,
      transportation: [
        {
          type: '飞机',
          duration: '根据具体城市而定',
          price: '根据具体城市而定',
          detail: `从成都双流或天府机场出发，直飞${customForm.city}，或经其他城市转机。`
        },
        {
          type: '高铁',
          duration: '根据具体城市而定',
          price: '根据具体城市而定',
          detail: `从成都东站乘坐高铁前往${customForm.city}，或经其他城市换乘。`
        },
        {
          type: '汽车',
          duration: '根据具体城市而定',
          price: '根据具体城市而定',
          detail: `从成都各大汽车站乘坐大巴前往${customForm.city}。`
        }
      ]
    }

    setCustomAttractions(prev => [...prev, newCustomAttraction])
    setCustomForm({ name: '', city: '', category: '' })
    setShowCustomForm(false)
  }

  // 删除自定义景点
  const deleteCustomAttraction = (index) => {
    setCustomAttractions(prev => prev.filter((_, i) => i !== index))
  }

  // 根据选中区域获取背景类名
  const getBackgroundClass = () => {
    switch (selectedRegion) {
      case '南方':
        return 'app app-south';
      case '北方':
        return 'app app-north';
      case '西北':
        return 'app app-northwest';
      case '西南':
        return 'app app-southwest';
      default:
        return 'app';
    }
  };

  return (
    <div className={getBackgroundClass()}>
      {/* 背景装饰 */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
        <div className="shape shape-7"></div>
        <div className="shape shape-8"></div>
      </div>

      {/* 作者信息 */}
      <div className="author-info">
        0xDaHai
      </div>

      {/* 主容器 */}
      <div className="container">
        {/* 标题 */}
        <h1 className="title">国内旅游景点随机选择器</h1>

        {/* 主体内容 */}
        <div className="main-content">
          {/* 随机选择区域 */}
          <div className="randomizer-section">
            {/* 区域选择器 */}
            <div className="region-selector">
              <h3 className="region-title">选择旅游区域</h3>
              <div className="region-buttons">
                {regions.map(region => (
                  <button
                    key={region}
                    className={`region-btn ${selectedRegion === region ? 'active' : ''}`}
                    onClick={() => setSelectedRegion(region)}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="attraction-display">
              {selectedAttraction ? (
                <div className="attraction-info">
                  <h2 className="attraction-name">{selectedAttraction.name}</h2>
                  <p className="attraction-city">{selectedAttraction.city}</p>
                  <div className="attraction-meta">
                    <span className="attraction-category">{selectedAttraction.category}</span>
                    <span className="attraction-region">📍 {selectedAttraction.region}</span>
                  </div>
                  
                  {/* 交通攻略 */}
                  <div className="transportation-section">
                    <h3 className="transportation-title">从成都出发交通攻略</h3>
                    <div className="transportation-options">
                      {selectedAttraction.transportation.map((option, index) => (
                        <div key={index} className="transportation-card">
                          <div className="transportation-header">
                            <h4 className="transportation-type">{option.type}</h4>
                            <div className="transportation-meta">
                              <span className="transportation-duration">⏱️ {option.duration}</span>
                              <span className="transportation-price">💰 {option.price}</span>
                            </div>
                          </div>
                          <p className="transportation-detail">{option.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="empty-state">
                  <p>点击按钮开始随机选择景点</p>
                </div>
              )}
            </div>
            
            {/* 控制按钮区域 */}
            <div className="control-buttons">
              <button 
                className="randomize-btn" 
                onClick={randomizeAttraction}
              >
                🎲 随机选择景点
              </button>
              <button 
                className="custom-btn" 
                onClick={() => setShowCustomForm(!showCustomForm)}
              >
                {showCustomForm ? '✕ 取消' : '➕ 添加自定义景点'}
              </button>
            </div>
            
            {/* 自定义景点表单 */}
            {showCustomForm && (
              <div className="custom-form-section">
                <h3 className="custom-form-title">添加自定义景点</h3>
                <form onSubmit={addCustomAttraction} className="custom-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">景点名称</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-input" 
                      value={customForm.name} 
                      onChange={handleCustomFormChange} 
                      placeholder="例如：成都宽窄巷子"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city" className="form-label">所在城市</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      className="form-input" 
                      value={customForm.city} 
                      onChange={handleCustomFormChange} 
                      placeholder="例如：成都"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category" className="form-label">景点类型</label>
                    <input 
                      type="text" 
                      id="category" 
                      name="category" 
                      className="form-input" 
                      value={customForm.category} 
                      onChange={handleCustomFormChange} 
                      placeholder="例如：历史文化"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="region" className="form-label">所在区域</label>
                    <select 
                      id="region" 
                      name="region" 
                      className="form-input" 
                      value={customForm.region} 
                      onChange={handleCustomFormChange}
                    >
                      <option value="南方">南方</option>
                      <option value="北方">北方</option>
                      <option value="西北">西北</option>
                      <option value="西南">西南</option>
                    </select>
                  </div>
                  <button type="submit" className="submit-btn">保存自定义景点</button>
                </form>
              </div>
            )}
            
            {/* 自定义景点列表 */}
            {customAttractions.length > 0 && (
              <div className="custom-attractions-list">
                <h3 className="custom-list-title">自定义景点 ({customAttractions.length})</h3>
                <div className="custom-attractions-grid">
                  {customAttractions.map((attraction, index) => (
                    <div key={index} className="custom-attraction-item">
                      <div className="custom-attraction-info">
                        <h4>{attraction.name}</h4>
                        <p>{attraction.city} · {attraction.category}</p>
                      </div>
                      <button 
                        className="delete-btn" 
                        onClick={() => deleteCustomAttraction(index)}
                        title="删除自定义景点"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 备忘录区域 */}
          <div className="memo-section">
            <div className="memo-header">
              <h3>备忘录</h3>
              <button 
                className="clear-btn" 
                onClick={clearMemo}
                disabled={memo.length === 0}
              >
                清空
              </button>
            </div>
            <div className="memo-list">
              {memo.length === 0 ? (
                <p className="memo-empty">暂无记录</p>
              ) : (
                memo.map((item, index) => (
                  <div key={index} className="memo-item">
                    <div className="memo-item-content">
                      <h4>{item.name}</h4>
                      <p>{item.city} · {item.category}</p>
                    </div>
                    <span className="memo-time">{item.time}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App