const traitCatalog = {
  treeHeight: { label: '树高', unit: 'm', min: 2, max: 36, threshold: 18 },
  dbh: { label: '胸径', unit: 'cm', min: 3, max: 80, threshold: 24 },
  crownWidth: { label: '冠幅', unit: 'm', min: 1, max: 14, threshold: 5 },
  volume: { label: '材积', unit: 'm3', min: 0.02, max: 3.2, threshold: 0.65 },
  stemStraightness: { label: '干性/通直度', unit: '分', min: 1, max: 10, threshold: 7 },
  woodDensity: { label: '木材密度', unit: 'g/cm3', min: 0.25, max: 0.9, threshold: 0.48 },
  diseaseResistance: { label: '抗病性', unit: '分', min: 1, max: 10, threshold: 7 },
  droughtTolerance: { label: '抗旱/适应性', unit: '分', min: 1, max: 10, threshold: 7 },
  survivalRate: { label: '保存率', unit: '%', min: 40, max: 100, threshold: 82 },
  fruitWeight: { label: '单果重', unit: 'g', min: 5, max: 420, threshold: 120 },
  solubleSolids: { label: '可溶性固形物', unit: '%', min: 7, max: 28, threshold: 14 },
  fruitFirmness: { label: '硬度/耐贮性', unit: '分', min: 1, max: 10, threshold: 7 },
  fruitColor: { label: '果色/外观', unit: '分', min: 1, max: 10, threshold: 7 },
  fruitYield: { label: '单株产量', unit: 'kg', min: 1, max: 180, threshold: 35 },
  seedOil: { label: '含油率/出仁率', unit: '%', min: 10, max: 75, threshold: 42 },
  leafYield: { label: '芽叶产量', unit: 'kg', min: 0.5, max: 28, threshold: 8 },
  activeCompound: { label: '有效成分', unit: '分', min: 1, max: 10, threshold: 7 },
  flowerDensity: { label: '花量', unit: '分', min: 1, max: 10, threshold: 7 },
  aroma: { label: '香气', unit: '分', min: 1, max: 10, threshold: 7 },
  flowerDiameter: { label: '花径', unit: 'cm', min: 2, max: 26, threshold: 12 },
  flowerColor: { label: '花色稳定性', unit: '分', min: 1, max: 10, threshold: 7 },
  essentialOil: { label: '挥发油含量', unit: '%', min: 0.05, max: 8, threshold: 1.5 },
  citralContent: { label: '柠檬醛含量', unit: '%', min: 0.1, max: 85, threshold: 35 },
  linaloolContent: { label: '芳樟醇含量', unit: '%', min: 0.1, max: 75, threshold: 25 },
  leafBiomass: { label: '叶生物量', unit: 'kg', min: 0.1, max: 80, threshold: 12 },
  seedFat: { label: '种仁含油率', unit: '%', min: 5, max: 65, threshold: 28 }
};

const programSteps = [
  { title: '天然林调查', detail: '进入天然林或资源群体，按样地调查法记录候选单株的表型、适应性和材料来源。' },
  { title: '优树选择', detail: '依据树高、胸径、冠幅、材积、干性、抗性和目标品质构建综合选择指数。' },
  { title: '种源试验', detail: '收集不同地理种源，采用随机区组和多点试验比较适应性与生产力。' },
  { title: '创造变异', detail: '通过杂交、诱变、倍性育种、分子辅助选择或无性系变异获得新遗传变异。' },
  { title: '遗传测定', detail: '开展子代、家系、无性系和多地点测定，估算遗传参数和育种值。' },
  { title: '品种选择', detail: '综合遗传增益、稳定性和推广风险，选择优良新品种或无性系。' },
  { title: '种子园建立', detail: '配置入选亲本，建设初级或改良代种子园，控制花粉污染并提高良种产量。' },
  { title: '采穗圃建立', detail: '建立采穗圃、母本园或采条圃，为扦插、嫁接和组培扩繁提供材料。' },
  { title: '良种繁育', detail: '在苗圃繁育良种壮苗，完成质量检验后用于生产造林或经济林建园。' },
  { title: '循环改良', detail: '保留核心亲本和遗传多样性，结合生产反馈进入下一轮轮回选择。' }
];

const actionSets = [
  ['布设样地', '测树高', '测胸径', '测冠幅与干性', '记录生境', '健康评价', '采集样品', '同步录入'],
  ['计算选择指数', '挂牌优树', '采集繁殖材料', '形成优树群体', '拍照建档', '复核指标', '保留备选', '归档优树'],
  ['整理种源批次', '随机区组设计', '调查保存率', '判定适应种源', '产地匹配', '多点重复', '数据质控', '推荐种源'],
  ['选择亲本', '去雄套袋', '人工授粉', '分子标记检测', '倍性诱导', '诱变筛选', '建立杂交家系', '整理谱系'],
  ['建立测定林', '方差分解', '计算遗传力', '估算育种值', '计算选择差', '预测遗传增益', '稳定性分析', '排序候选'],
  ['综合排序', '风险评估', '示范验证', '确定新品种', '稳定性复核', '品质复验', '命名建档', '权属保护'],
  ['配置无性系', '设计株行距', '控制花粉污染', '遗传疏伐', '促花管理', '采种处理', '良种认证', '改良代更新'],
  ['母株建圃', '促萌修剪', '扦插处理', '嫁接扩繁', '组织培养', '生根炼苗', '身份鉴定', '穗条供应'],
  ['播种育苗', '无性扩繁', '苗木分级', '投入生产', '检疫检测', '包装运输', '造林建园', '生产反馈'],
  ['生产反馈', '多样性监测', '更新亲本', '启动下一轮', '资源保存', '世代比较', '更新模型', '制定计划']
];
const stageModes = ['Natural Forest', 'Plus Tree Selection', 'Provenance Trial', 'Variation Creation', 'Genetic Test', 'Variety Selection', 'Seed Orchard', 'Scion Garden', 'Propagation', 'Recurrent Improvement'];
const stageElements = [
  ['forest', 'researcher', 'treeA', 'treeB', 'treeC', 'rangefinder', 'dbhTape'],
  ['forest', 'researcher', 'eliteTree', 'tagRibbon', 'sampleBag', 'clipboard'],
  ['trialRows', 'researcher', 'seedLots', 'blockMarkers', 'weatherStation'],
  ['orchard', 'pollenBag', 'crossLine', 'labBench', 'dnaMarker'],
  ['nursery', 'familyRows', 'dataTablet', 'chartBars', 'researcher'],
  ['eliteBoard', 'chartBars', 'certificate', 'diversityCircle', 'researcher'],
  ['orchard', 'seedCone', 'pollenCloud', 'researcher', 'qualityStamp'],
  ['scionGarden', 'graftBench', 'cuttingTray', 'mistHouse', 'labelTags'],
  ['nursery', 'seedlingCrates', 'qualityStamp', 'truck', 'researcher'],
  ['geneBank', 'chartBars', 'cycleArrow', 'diversityCircle', 'researcher']
];
const stageSimulations = programSteps.map((step, index) => ({
  mode: stageModes[index],
  title: step.title + (index === 0 ? '与样地测量' : ''),
  subtitle: step.detail,
  elements: stageElements[index],
  actions: actionSets[index].map((label, actionIndex) => ({
    id: ['plot', 'height', 'dbh', 'crown', 'site', 'health', 'sample', 'sync'][actionIndex] || ('action' + actionIndex),
    label,
    hint: '请完成“' + label + '”，并把结果记录到当前选育程序。'
  }))
}));
const extraStageActions = Array.from({ length: stageSimulations.length }, () => []);
const stageBriefs = programSteps.map((step, index) => ({ objective: '掌握“' + step.title + '”在林木育种程序中的目的、流程和数据要求。', principle: step.detail, output: index === 4 ? '形成遗传力、选择差、选择优势、育种值和预期遗传增益。' : '形成可进入下一步的育种材料、记录表和判断依据。' }));
const stageNarrations = programSteps.map((step) => step.title + '是林木育种选育程序中的关键步骤。研究者需要亲自完成任务、记录数据，并把结果用于下一步决策。');
const stageKnowledgeCards = programSteps.map((step, index) => ({ chapter: '第' + Math.min(index + 1, 8) + '章 相关知识', focus: step.title, method: step.detail, caution: index === 0 ? '样地和编号必须可复查，避免只选择路边或显眼单株。' : '数据需保留来源、时间、人员和测定方法，便于后续遗传分析。' }));
const stageTeamDialogues = programSteps.map((step) => ['研究者：现在进入' + step.title + '。', '记录员：数据已同步到选育记录。']);

const textbookChapters = [
  { title: '绪论', summary: '认识林木育种学的研究对象、任务、发展历程和林业生产中的作用。', nodes: ['研究对象', '育种任务', '良种概念', '发展历程', '生产应用'], ppt: ['林木育种学研究对象及任务', '林木育种发展历程与现状', '国内外林木育种进展', '林木育种特点和发展趋势', '林业与林木育种的发展趋势', '林木良种在生产中的作用'] },
  { title: '林木选育技术基础', summary: '理解人工选择、选择类型、选择方式、树种繁殖特性和选择效果之间的关系。', nodes: ['人工选择', '选择类型', '选择方式', '选择指数', '繁殖特性'], ppt: ['林木选育方法', '人工选择和选择类型', '选择方式与选择强度', '树种繁殖特性', '选择效果评价', '分子育种与早期选择'] },
  { title: '林木遗传资源和树木引种', summary: '掌握种质资源收集、保存、评价、利用和引种驯化原则。', nodes: ['遗传资源', '资源调查', '资源保存', '引种驯化', '风险评价'], ppt: ['林木遗传资源概念', '种质资源调查与收集', '资源保存与评价', '树木引种原则', '引种试验设计', '引种风险与生态适应'] },
  { title: '种源选择与优树选择', summary: '掌握种源试验、优树选择、天然群体调查和候选单株评价方法。', nodes: ['天然群体', '样地调查', '种源试验', '优树选择', '表型测定'], ppt: ['种源选择与优树选择', '种源调查与采样', '候选树登记', '表型数据采集', '优树选择标准', '选择差与遗传增益'] },
  { title: '杂交与倍性育种', summary: '学习亲本选择、控制授粉、杂交家系建立、诱变和倍性育种。', nodes: ['亲本选择', '控制授粉', '杂交家系', '诱变育种', '倍性育种'], ppt: ['杂交育种原理', '亲本互补与配合力', '花粉采集与授粉', '杂交后代选择', '倍性诱导', '诱变材料筛选'] },
  { title: '无性繁殖与无性系选育', summary: '掌握扦插、嫁接、组织培养、无性系测定和采穗圃建设。', nodes: ['无性系', '扦插', '嫁接', '组织培养', '采穗圃'], ppt: ['无性繁殖意义', '扦插繁殖', '嫁接繁殖', '组织培养', '无性系测定', '采穗圃经营'] },
  { title: '种子园', summary: '理解种子园类型、亲本配置、建园、经营、疏伐和种子质量控制。', nodes: ['种子园类型', '亲本配置', '花粉污染', '遗传疏伐', '良种生产'], ppt: ['种子园概念', '初级种子园', '改良代种子园', '建园设计', '经营管理', '种子质量检测'] },
  { title: '遗传测定', summary: '掌握子代、家系、无性系和多地点遗传测定设计与数据分析。', nodes: ['测定设计', '方差组分', '遗传力', '育种值', '多点试验'], ppt: ['遗传测定设计', '完全随机与区组设计', '子代测定与家系测定', '无性系测定', '遗传力估算', '育种值估算'] },
  { title: '选择指数与遗传参数', summary: '把多性状观测数据转化为选择指数、选择差、选择强度和预期增益。', nodes: ['选择指数', '选择差', '选择强度', '遗传增益', '综合评价'], ppt: ['多性状综合选择', '选择指数构建', '性状权重确定', '选择差计算', '预期遗传增益', '稳定性与适应性评价'] },
  { title: '良种繁育与苗木生产', summary: '学习良种扩繁、苗木分级、检疫、出圃和适地适树推广。', nodes: ['良种繁育', '苗木质量', '检疫检测', '出圃投放', '生产反馈'], ppt: ['良种繁育体系', '播种育苗', '无性扩繁苗生产', '苗木质量分级', '检疫与追溯', '生产应用反馈'] },
  { title: '林木生物技术育种', summary: '理解分子标记、基因组选择、组织培养、倍性鉴定与生物技术辅助育种。', nodes: ['分子标记', '基因组选择', '组织培养', '倍性鉴定', '早期选择'], ppt: ['分子标记辅助选择', '基因组选择思路', '组织培养与快繁', '倍性鉴定技术', '早期选择应用', '生物技术与常规育种结合'] },
  { title: '循环改良与良种推广', summary: '把资源保存、轮回选择、良种审定、推广示范和生产反馈连接成长期改良闭环。', nodes: ['循环改良', '资源保存', '良种审定', '推广示范', '反馈更新'], ppt: ['轮回选择策略', '核心种质保存', '品种审定与登记', '示范林与生产推广', '数据反馈与模型更新', '下一轮育种计划'] }
];
const coursewareFiles = ['第1章 绪论.ppt', '第2章 林木选育技术基础.ppt', '第3章 林木遗传资源和树木引种.ppt', '第4章 种源与优树选择.ppt', '第5章 杂交与倍性育种.ppt', '第6章 无性繁殖与无性系选育.ppt', '第7章 种子园.ppt', '第8章 遗传测定.ppt'];
const plantBreedingExtensions = ['植物育种学强调育种目标、种质资源、选择、杂交、诱变、倍性、分子标记和品种审定的连续流程。', '经济林和林木育种可借鉴作物育种中的群体构建、亲本选择、后代表型鉴定和多环境试验。', '分子标记辅助选择能够把早期 DNA 信息与长期表型测定结合，提高选择效率。', '多性状综合选择需要兼顾产量、品质、抗逆、适应性和遗传多样性。'];
function getPlantBreedingExtension(chapterIndex, pointIndex) { return plantBreedingExtensions[(chapterIndex + pointIndex) % plantBreedingExtensions.length]; }
function getCoursewareDeck(chapterIndex) { const file = coursewareFiles[chapterIndex] || coursewareFiles[0]; const deck = window.coursewareContent && window.coursewareContent[file]; return deck ? Object.assign({ file }, deck) : null; }
function normalizePptLines(slide) { const source = [slide && slide.title, ...((slide && slide.bullets) || []), slide && slide.notes].filter(Boolean).join('\n'); const parts = source.split(/\n|；|。/).map((item) => item.trim()).filter(Boolean); return parts.length ? parts : ['知识点', '管理员可在登录后编辑本页内容、增加图片并调整页数。']; }
function escapeHtml(value) { return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\x22/g, '&quot;'); }
function escapeAttr(value) { return escapeHtml(value).replace(/'/g, '&#39;'); }
function editableAttr(field, index = '') { return isAdmin() ? 'contenteditable=\'true\' spellcheck=\'false\' data-theory-edit=\'' + field + '\' data-edit-index=\'' + index + '\' class=\'admin-inline-edit\'' : ''; }
function getSlideCards(slide, point = {}, chapter = {}) { if (Array.isArray(slide.cards) && slide.cards.length) return slide.cards; const lines = normalizePptLines(slide).slice(0, 10); const fallback = point.summary || chapter.summary || '本页内容可由管理员编辑为当前知识点的教学说明、实践目的和关键操作。'; const items = [...new Set([...(lines.length > 1 ? lines.slice(1) : []), fallback, ...((point.nodes || []).map((node) => '关联知识：' + node)), chapter.summary].filter(Boolean))]; const labels = ['核心概念', '关键术语', '任务目标', '方法路径', '实践要点', '判断标准', '应用场景', '学习提示']; return items.slice(0, 8).map((text, index) => ({ label: labels[index % labels.length], text })); }
function renderSlideText(slide, point = {}, chapter = {}) { if (slide.visual !== 'courseware') return '<p>' + escapeHtml(slide.text || point.summary || chapter.summary || '') + '</p>'; const fallback = point.summary || chapter.summary || '本页内容可由管理员编辑为当前知识点的教学说明、实践目的和关键操作。'; const cards = getSlideCards(slide, point, chapter); const chips = [...new Set([...(point.nodes || []), ...(chapter.nodes || [])])].slice(0, 6); return '<div class=\'knowledge-visual-board\'>' + (slide.image ? '<figure class=\'knowledge-image-card\'><img src=\'' + escapeAttr(slide.image) + '\' alt=\'' + escapeAttr(slide.title || point.title) + '\' loading=\'lazy\'></figure>' : '') + '<div class=\'knowledge-main-card\'><strong ' + editableAttr('slideSummaryTitle') + '>知识摘要</strong><p ' + editableAttr('pointSummary') + '>' + escapeHtml(fallback) + '</p></div><div class=\'knowledge-card-grid\'>' + cards.map((card, index) => '<article><span ' + editableAttr('cardLabel', index) + '>' + escapeHtml(card.label || ('知识点' + (index + 1))) + '</span><p ' + editableAttr('cardText', index) + '>' + escapeHtml(card.text || '') + '</p></article>').join('') + '</div><div class=\'knowledge-chip-row\'>' + chips.map((node, index) => '<span ' + editableAttr('node', index) + '>' + escapeHtml(node) + '</span>').join('') + '</div></div>'; }
function getCoursewareSlidesForPoint(chapterIndex, pointIndex, pointCount) { const deck = getCoursewareDeck(chapterIndex); if (!deck || !deck.slides || !deck.slides.length) return []; const chunkSize = Math.max(1, Math.ceil(deck.slides.length / Math.max(1, pointCount))); return deck.slides.slice(pointIndex * chunkSize, pointIndex * chunkSize + chunkSize).map((pptSlide) => { const lines = normalizePptLines(pptSlide); return { label: '知识页' + pptSlide.index, title: lines[0] || ('课件第' + pptSlide.index + '页'), visual: 'courseware', source: deck.file, image: '', text: lines.slice(1).join('；') || '该页为课堂讲解页，可结合知识拓扑和仿真实践理解。' }; }); }
function makeTheorySlides(chapter, title, summary, nodes, chapterIndex, pointIndex) { return [{ label: '概念定位', title, visual: 'concept', text: summary }, { label: '知识拓扑', title: title + '知识结构', visual: 'topology', text: nodes.join('、') }, { label: '实践迁移', title: '与仿真实践的关系', visual: 'process', text: getPlantBreedingExtension(chapterIndex, pointIndex) }]; }
const chapterKnowledge = textbookChapters.map((chapter, chapterIndex) => ({ title: '第' + (chapterIndex + 1) + '章 ' + chapter.title, summary: chapter.summary, nodes: chapter.nodes, points: chapter.ppt.map((point, pointIndex) => { const related = [chapter.nodes[pointIndex % chapter.nodes.length], chapter.nodes[(pointIndex + 1) % chapter.nodes.length], chapter.nodes[(pointIndex + 2) % chapter.nodes.length], '育种程序', '实践应用'].filter(Boolean); const summary = point + '是《' + chapter.title + '》中的核心学习点。学习时需要说明定义、开展原因、操作目的、关键数据和在林木育种程序中的应用。'; return { title: point, summary, nodes: related, slides: getCoursewareSlidesForPoint(chapterIndex, pointIndex, chapter.ppt.length).concat(makeTheorySlides(chapter, point, summary, related, chapterIndex, pointIndex)) }; }) }));
const theoryDetails = [{ title: '林木育种程序概述', definition: '林木育种是以遗传变异为基础，通过资源调查、选择、杂交或无性繁殖、遗传测定和良种繁育，提高林木生长、材性、抗逆、品质和适应性的长期改良过程。', why: '林木世代长、占地大、受环境影响强，必须用系统化育种程序降低试错成本。', goal: '建立从资源发现到良种生产应用的闭环。', key: '资源调查、优树选择、种源试验、变异创造、遗传测定、品种选择、种子园、采穗圃、良种繁育与循环改良。', output: '形成育种群体、推广群体、良种繁育体系和生产反馈数据。' }].concat(chapterKnowledge.map((chapter) => ({ title: chapter.title, definition: chapter.summary, why: '该章知识为虚拟实践中对应步骤提供理论依据。', goal: '理解概念、掌握方法、能解释数据并迁移到选育程序。', key: chapter.nodes.join('、'), output: chapter.points.map((point) => point.title).join('；'), nodes: chapter.nodes })));
const typeNames = { timber: '用材林', fruit: '果树经济林', oil: '油料/香料林', ornamental: '观赏林木', medicinal: '药用林木' };
const fallbackPlantResources = [
  { id: 'cunninghamia-lanceolata', chinese: '杉木', scientific: 'Cunninghamia lanceolata', family: '柏科', type: 'timber', region: '长江以南丘陵山地', objective: '速生、通直、材性稳定', weights: { treeHeight: 0.18, dbh: 0.2, crownWidth: 0.08, volume: 0.22, stemStraightness: 0.14, woodDensity: 0.1, diseaseResistance: 0.08 } },
  { id: 'pinus-massoniana', chinese: '马尾松', scientific: 'Pinus massoniana', family: '松科', type: 'timber', region: '南方低山丘陵', objective: '松脂、材积、抗逆', weights: { treeHeight: 0.12, dbh: 0.16, volume: 0.18, stemStraightness: 0.1, diseaseResistance: 0.12, droughtTolerance: 0.12, seedFat: 0.1, essentialOil: 0.1 } },
  { id: 'populus-tomentosa', chinese: '毛白杨', scientific: 'Populus tomentosa', family: '杨柳科', type: 'timber', region: '华北平原和黄淮地区', objective: '速生、抗病、无性系繁殖', weights: { treeHeight: 0.18, dbh: 0.2, crownWidth: 0.07, volume: 0.22, stemStraightness: 0.12, diseaseResistance: 0.14, droughtTolerance: 0.07 } },
  { id: 'camellia-oleifera', chinese: '油茶', scientific: 'Camellia oleifera', family: '山茶科', type: 'oil', region: '长江流域及南方丘陵', objective: '高产、高油、稳产', weights: { crownWidth: 0.08, fruitYield: 0.22, seedOil: 0.28, diseaseResistance: 0.12, droughtTolerance: 0.1, fruitWeight: 0.1, survivalRate: 0.1 } },
  { id: 'juglans-regia', chinese: '核桃', scientific: 'Juglans regia', family: '胡桃科', type: 'fruit', region: '西北、华北和西南山地', objective: '丰产、薄壳、高仁率', weights: { fruitYield: 0.22, fruitWeight: 0.16, seedFat: 0.18, diseaseResistance: 0.12, droughtTolerance: 0.1, crownWidth: 0.08, survivalRate: 0.14 } },
  { id: 'malus-domestica', chinese: '苹果', scientific: 'Malus domestica', family: '蔷薇科', type: 'fruit', region: '渤海湾、黄土高原和西南冷凉区', objective: '果实品质、丰产、抗病', weights: { fruitWeight: 0.16, solubleSolids: 0.18, fruitFirmness: 0.12, fruitColor: 0.12, fruitYield: 0.2, diseaseResistance: 0.14, droughtTolerance: 0.08 } }
];

const extraPlantResources = [
  { id: 'ginkgo-biloba', chinese: '银杏', scientific: 'Ginkgo biloba', family: '银杏科', type: 'medicinal', region: '华东、华中及西南', objective: '叶用、果用与观赏兼用', weights: { treeHeight: 0.08, crownWidth: 0.12, leafYield: 0.2, activeCompound: 0.22, diseaseResistance: 0.12, droughtTolerance: 0.1, survivalRate: 0.16 } },
  { id: 'paulownia-fortunei', chinese: '白花泡桐', scientific: 'Paulownia fortunei', family: '泡桐科', type: 'timber', region: '华中、华南及西南', objective: '速生、干形通直、材性轻软', weights: { treeHeight: 0.18, dbh: 0.2, volume: 0.24, stemStraightness: 0.14, woodDensity: 0.08, diseaseResistance: 0.08, droughtTolerance: 0.08 } },
  { id: 'eucalyptus-grandis', chinese: '巨桉', scientific: 'Eucalyptus grandis', family: '桃金娘科', type: 'timber', region: '华南速生丰产林区', objective: '速生、高材积、抗逆', weights: { treeHeight: 0.18, dbh: 0.18, volume: 0.25, stemStraightness: 0.1, woodDensity: 0.1, diseaseResistance: 0.09, droughtTolerance: 0.1 } },
  { id: 'larix-kaempferi', chinese: '日本落叶松', scientific: 'Larix kaempferi', family: '松科', type: 'timber', region: '东北、华北山地', objective: '速生、耐寒、材质优良', weights: { treeHeight: 0.16, dbh: 0.18, volume: 0.24, stemStraightness: 0.12, woodDensity: 0.12, diseaseResistance: 0.08, droughtTolerance: 0.1 } },
  { id: 'pinus-koraiensis', chinese: '红松', scientific: 'Pinus koraiensis', family: '松科', type: 'timber', region: '东北林区', objective: '材用与坚果兼用、抗寒', weights: { treeHeight: 0.12, dbh: 0.14, volume: 0.18, stemStraightness: 0.08, seedFat: 0.18, diseaseResistance: 0.12, droughtTolerance: 0.08, survivalRate: 0.1 } },
  { id: 'quercus-acutissima', chinese: '麻栎', scientific: 'Quercus acutissima', family: '壳斗科', type: 'timber', region: '华北、华中及华东丘陵', objective: '耐旱、材用、生态修复', weights: { treeHeight: 0.12, dbh: 0.16, volume: 0.18, woodDensity: 0.16, diseaseResistance: 0.12, droughtTolerance: 0.16, survivalRate: 0.1 } },
  { id: 'toona-sinensis', chinese: '香椿', scientific: 'Toona sinensis', family: '楝科', type: 'medicinal', region: '华北至西南', objective: '芽用、材用、香气品质', weights: { treeHeight: 0.08, dbh: 0.08, leafYield: 0.22, activeCompound: 0.18, aroma: 0.16, diseaseResistance: 0.12, droughtTolerance: 0.08, survivalRate: 0.08 } },
  { id: 'cinnamomum-camphora', chinese: '樟树', scientific: 'Cinnamomum camphora', family: '樟科', type: 'oil', region: '长江以南城市与山地', objective: '芳香油、抗逆、观赏', weights: { treeHeight: 0.08, crownWidth: 0.12, essentialOil: 0.24, activeCompound: 0.14, diseaseResistance: 0.14, droughtTolerance: 0.12, survivalRate: 0.16 } },
  { id: 'phoebe-zhennan', chinese: '楠木', scientific: 'Phoebe zhennan', family: '樟科', type: 'timber', region: '西南及长江流域', objective: '珍贵材、材性稳定、适应性', weights: { treeHeight: 0.12, dbh: 0.16, volume: 0.18, stemStraightness: 0.12, woodDensity: 0.18, diseaseResistance: 0.12, droughtTolerance: 0.12 } },
  { id: 'santalum-album', chinese: '檀香', scientific: 'Santalum album', family: '檀香科', type: 'medicinal', region: '华南适生区', objective: '心材品质、精油、抗逆', weights: { treeHeight: 0.06, dbh: 0.1, woodDensity: 0.16, essentialOil: 0.28, activeCompound: 0.16, diseaseResistance: 0.12, droughtTolerance: 0.12 } },
  { id: 'prunus-persica', chinese: '桃', scientific: 'Prunus persica', family: '蔷薇科', type: 'fruit', region: '华北、华东及西南果区', objective: '果实品质、丰产、抗病', weights: { fruitWeight: 0.18, solubleSolids: 0.18, fruitFirmness: 0.12, fruitColor: 0.12, fruitYield: 0.18, diseaseResistance: 0.14, droughtTolerance: 0.08 } },
  { id: 'pyrus-bretschneideri', chinese: '白梨', scientific: 'Pyrus bretschneideri', family: '蔷薇科', type: 'fruit', region: '华北与西北果区', objective: '大果、脆甜、耐贮', weights: { fruitWeight: 0.2, solubleSolids: 0.16, fruitFirmness: 0.16, fruitColor: 0.08, fruitYield: 0.18, diseaseResistance: 0.12, droughtTolerance: 0.1 } },
  { id: 'castanea-mollissima', chinese: '板栗', scientific: 'Castanea mollissima', family: '壳斗科', type: 'fruit', region: '燕山、太行山及南方丘陵', objective: '坚果品质、丰产、抗逆', weights: { fruitWeight: 0.18, fruitYield: 0.22, seedFat: 0.14, diseaseResistance: 0.14, droughtTolerance: 0.12, crownWidth: 0.08, survivalRate: 0.12 } },
  { id: 'ziziphus-jujuba', chinese: '枣', scientific: 'Ziziphus jujuba', family: '鼠李科', type: 'fruit', region: '华北、西北干旱半干旱区', objective: '果实品质、抗旱、稳产', weights: { fruitWeight: 0.14, solubleSolids: 0.22, fruitFirmness: 0.12, fruitYield: 0.18, diseaseResistance: 0.1, droughtTolerance: 0.16, survivalRate: 0.08 } },
  { id: 'chaenomeles-sinensis', chinese: '木瓜', scientific: 'Chaenomeles sinensis', family: '蔷薇科', type: 'medicinal', region: '华东、华中及西南', objective: '药用成分、果实产量、抗病', weights: { fruitWeight: 0.14, fruitYield: 0.18, activeCompound: 0.24, diseaseResistance: 0.14, droughtTolerance: 0.1, survivalRate: 0.1, fruitColor: 0.1 } },
  { id: 'eucommia-ulmoides', chinese: '杜仲', scientific: 'Eucommia ulmoides', family: '杜仲科', type: 'medicinal', region: '秦巴山区及西南', objective: '胶质、药用成分、抗逆', weights: { treeHeight: 0.1, dbh: 0.12, activeCompound: 0.26, woodDensity: 0.1, diseaseResistance: 0.14, droughtTolerance: 0.14, survivalRate: 0.14 } },
  { id: 'magnolia-denudata', chinese: '玉兰', scientific: 'Magnolia denudata', family: '木兰科', type: 'ornamental', region: '华东、华中园林区', objective: '花型、花色、抗逆、观赏', weights: { flowerDiameter: 0.2, flowerColor: 0.18, flowerDensity: 0.18, aroma: 0.12, diseaseResistance: 0.12, droughtTolerance: 0.08, survivalRate: 0.12 } },
  { id: 'acer-palmatum', chinese: '鸡爪槭', scientific: 'Acer palmatum', family: '槭树科', type: 'ornamental', region: '长江流域园林区', objective: '叶色稳定、冠形、抗逆', weights: { crownWidth: 0.16, flowerColor: 0.16, activeCompound: 0.08, diseaseResistance: 0.16, droughtTolerance: 0.12, survivalRate: 0.16, stemStraightness: 0.16 } }
];
const litseaSpeciesNames = [['litsea-cubeba', '山鸡椒', 'Litsea cubeba', '华中、华南及西南'], ['litsea-pungens', '木姜子', 'Litsea pungens', '秦岭以南山地'], ['litsea-glutinosa', '潺槁木姜子', 'Litsea glutinosa', '华南及西南'], ['litsea-elongata', '长叶木姜子', 'Litsea elongata', '西南山地'], ['litsea-coreana', '朝鲜木姜子', 'Litsea coreana', '华东、华中'], ['litsea-verticillata', '轮叶木姜子', 'Litsea verticillata', '南方山地'], ['litsea-auriculata', '耳叶木姜子', 'Litsea auriculata', '西南山地'], ['litsea-veitchiana', '川黔木姜子', 'Litsea veitchiana', '四川、贵州'], ['litsea-rubescens', '红脉木姜子', 'Litsea rubescens', '华南山地'], ['litsea-mollis', '柔毛木姜子', 'Litsea mollis', '西南地区'], ['litsea-lancifolia', '披针叶木姜子', 'Litsea lancifolia', '华南及西南'], ['litsea-pedunculata', '长梗木姜子', 'Litsea pedunculata', '南方山地'], ['litsea-akoensis', '台湾木姜子', 'Litsea akoensis', '台湾'], ['litsea-acuminata', '尖叶木姜子', 'Litsea acuminata', '东南山地'], ['litsea-variabilis', '变叶木姜子', 'Litsea variabilis', '西南山地'], ['litsea-yunnanensis', '云南木姜子', 'Litsea yunnanensis', '云南、贵州']];
const litseaResources = litseaSpeciesNames.map(([id, chinese, scientific, region]) => ({ id, chinese, scientific, family: '樟科', type: 'oil', region, objective: '精油含量、柠檬醛或芳樟醇品质、抗逆和生物量', weights: { treeHeight: 0.05, dbh: 0.06, crownWidth: 0.07, diseaseResistance: 0.1, droughtTolerance: 0.1, fruitYield: 0.16, essentialOil: 0.2, citralContent: 0.16, linaloolContent: 0.1 } }));
function safeStorageGet(area, key, fallback = null) {
  try {
    const storage = area === "session" ? sessionStorage : localStorage;
    const value = storage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function safeStorageSet(area, key, value) {
  try {
    const storage = area === "session" ? sessionStorage : localStorage;
    storage.setItem(key, value);
  } catch {
    // The simulation must still render when browser storage is unavailable.
  }
}

function safeStorageRemove(area, key) {
  try {
    const storage = area === "session" ? sessionStorage : localStorage;
    storage.removeItem(key);
  } catch {
    // Ignore storage cleanup failures.
  }
}

function safeStoredNumber(key, fallback = 0) {
  const value = Number(safeStorageGet("local", key, String(fallback)));
  return Number.isFinite(value) ? value : fallback;
}

function safeJsonArray(key) {
  try {
    const value = JSON.parse(safeStorageGet("local", key, "[]") || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    safeStorageRemove("local", key);
    return [];
  }
}

function safeJsonObject(key) {
  try {
    const value = JSON.parse(safeStorageGet("local", key, "{}") || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    safeStorageRemove("local", key);
    return {};
  }
}

function getInitialResources() {
  const external = window.CHINA_PLANT_RESOURCES;
  const base = Array.isArray(external) && external.length ? external : fallbackPlantResources;
  const seen = new Set(base.map((item) => item.id));
  const merged = [...base];
  [...extraPlantResources, ...litseaResources].forEach((item) => {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      merged.push(item);
    }
  });
  return merged.map((item) => ({
    ...item,
    name: item.name || item.chinese,
    habitat: item.habitat || item.region,
    genus: item.genus || (item.scientific ? item.scientific.split(" ")[0] : "")
  }));
}

function serializeTheoryContent() {
  return chapterKnowledge.map((chapter) => ({
    title: chapter.title,
    summary: chapter.summary || "",
    nodes: chapter.nodes || [],
    points: (chapter.points || []).map((point) => ({
      title: point.title,
      summary: point.summary || "",
      nodes: point.nodes || [],
      slides: (point.slides || []).map((slide) => ({
        label: slide.label,
        title: slide.title,
        text: slide.text || "",
        source: slide.source || "",
        image: slide.image || "",
        cards: Array.isArray(slide.cards) ? slide.cards : [],
        visual: slide.visual || "courseware"
      }))
    }))
  }));
}

function applyTheoryOverrides() {
  const override = safeJsonObject("forestBreedingTheoryOverrides");
  if (!Array.isArray(override.chapters)) return;
  override.chapters.forEach((savedChapter, chapterIndex) => {
    const chapter = chapterKnowledge[chapterIndex];
    if (!chapter || !savedChapter) return;
    if (savedChapter.title) chapter.title = savedChapter.title;
    chapter.summary = savedChapter.summary || chapter.summary || "";
    if (Array.isArray(savedChapter.nodes)) chapter.nodes = savedChapter.nodes;
    if (Array.isArray(savedChapter.points)) {
      savedChapter.points.forEach((savedPoint, pointIndex) => {
        if (!savedPoint) return;
        if (!chapter.points[pointIndex]) {
          chapter.points[pointIndex] = {
            title: savedPoint.title || `新增知识点${pointIndex + 1}`,
            summary: savedPoint.summary || "",
            nodes: savedPoint.nodes || [],
            slides: []
          };
        }
        const point = chapter.points[pointIndex];
        point.title = savedPoint.title || point.title;
        point.summary = savedPoint.summary || point.summary || "";
        if (Array.isArray(savedPoint.nodes)) point.nodes = savedPoint.nodes;
        if (Array.isArray(savedPoint.slides) && savedPoint.slides.length) {
          point.slides = savedPoint.slides.map((slide, slideIndex) => ({
            label: slide.label || `管理员页 ${slideIndex + 1}`,
            title: slide.title || point.title,
            text: slide.text || "",
            source: slide.source || "管理员更新",
            image: slide.image || "",
            cards: Array.isArray(slide.cards) ? slide.cards : [],
            visual: slide.visual || "courseware"
          }));
        }
      });
    }
  });
}

function saveTheoryOverrides() {
  safeStorageSet("local", "forestBreedingTheoryOverrides", JSON.stringify({ chapters: serializeTheoryContent() }));
}

const state = {
  resources: [...getInitialResources()],
  selectedSpecies: null,
  stage: 0,
  generation: 1,
  candidates: [],
  elites: [],
  trials: [],
  completedActions: {},
  activeCandidateId: null,
  theoryChapterIndex: 0,
  theoryKnowledgeIndex: 0,
  theorySlideIndex: 0,
  records: safeJsonArray("breedingRecords"),
  loginUser: null,
  adminUser: null,
  loginRecords: safeJsonArray("forestBreedingLoginRecords"),
  customTraitSerial: safeStoredNumber("forestBreedingCustomTraitSerial", 0),
  populationSize: safeStoredNumber("forestBreedingPopulationSize", 0) || null
};

const learningStats = {
  visits: safeStoredNumber("forestBreedingVisits", 0) + 1,
  learners: safeStoredNumber("forestBreedingLearners", 0)
};
if (!Number.isFinite(learningStats.visits)) learningStats.visits = 1;
if (!Number.isFinite(learningStats.learners)) learningStats.learners = 0;
safeStorageSet("local", "forestBreedingVisits", String(learningStats.visits));

const els = {
  resourceSearch: document.querySelector("#resourceSearch"),
  typeFilter: document.querySelector("#typeFilter"),
  resourceCount: document.querySelector("#resourceCount"),
  visitorStats: document.querySelector("#visitorStats"),
  loginStatusBtn: document.querySelector("#loginStatusBtn"),
  adminStatusBtn: document.querySelector("#adminStatusBtn"),
  logoutAllBtn: document.querySelector("#logoutAllBtn"),
  courseMenu: document.querySelector("#courseMenu"),
  speciesList: document.querySelector("#speciesList"),
  resourceFile: document.querySelector("#resourceFile"),
  selectedSpeciesName: document.querySelector("#selectedSpeciesName"),
  selectedSpeciesMeta: document.querySelector("#selectedSpeciesMeta"),
  theoryModule: document.querySelector("#theoryModule"),
  practiceModule: document.querySelector("#practiceModule"),
  examModule: document.querySelector("#examModule"),
  roleStatus: document.querySelector("#roleStatus"),
  theoryList: document.querySelector("#theoryList"),
  knowledgeList: document.querySelector("#knowledgeList"),
  theoryStepLabel: document.querySelector("#theoryStepLabel"),
  theoryTitle: document.querySelector("#theoryTitle"),
  chapterTopology: document.querySelector("#chapterTopology"),
  theoryBody: document.querySelector("#theoryBody"),
  prevSlideBtn: document.querySelector("#prevSlideBtn"),
  nextSlideBtn: document.querySelector("#nextSlideBtn"),
  pptProgress: document.querySelector("#pptProgress"),
  theoryAdminPanel: document.querySelector("#theoryAdminPanel"),
  adminEditStatus: document.querySelector("#adminEditStatus"),
  adminChapterTitle: document.querySelector("#adminChapterTitle"),
  adminChapterSummary: document.querySelector("#adminChapterSummary"),
  adminPointTitle: document.querySelector("#adminPointTitle"),
  adminPointSummary: document.querySelector("#adminPointSummary"),
  adminPointNodes: document.querySelector("#adminPointNodes"),
  adminSlideTitle: document.querySelector("#adminSlideTitle"),
  adminSlideText: document.querySelector("#adminSlideText"),
  adminSlideImageUrl: document.querySelector("#adminSlideImageUrl"),
  adminSlideImageFile: document.querySelector("#adminSlideImageFile"),
  saveTheoryEditBtn: document.querySelector("#saveTheoryEditBtn"),
  addKnowledgePointBtn: document.querySelector("#addKnowledgePointBtn"),
  addTheorySlideBtn: document.querySelector("#addTheorySlideBtn"),
  deleteTheorySlideBtn: document.querySelector("#deleteTheorySlideBtn"),
  resetTheoryOverrideBtn: document.querySelector("#resetTheoryOverrideBtn"),
  examStartBtn: document.querySelector("#examStartBtn"),
  stageNumber: document.querySelector("#stageNumber"),
  candidateCount: document.querySelector("#candidateCount"),
  eliteCount: document.querySelector("#eliteCount"),
  gainValue: document.querySelector("#gainValue"),
  stepTrack: document.querySelector("#stepTrack"),
  autoSelectBtn: document.querySelector("#autoSelectBtn"),
  retryStageBtn: document.querySelector("#retryStageBtn"),
  nextStepBtn: document.querySelector("#nextStepBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  sceneTitle: document.querySelector("#sceneTitle"),
  sceneProgress: document.querySelector("#sceneProgress"),
  sceneGate: document.querySelector("#sceneGate"),
  sceneVisual: document.querySelector("#sceneVisual"),
  sceneSubtitle: document.querySelector("#sceneSubtitle"),
  sceneActions: document.querySelector("#sceneActions"),
  stageBrief: document.querySelector("#stageBrief"),
  missionBoard: document.querySelector("#missionBoard"),
  knowledgeEmbed: document.querySelector("#knowledgeEmbed"),
  teamDialogue: document.querySelector("#teamDialogue"),
  stageOutcome: document.querySelector("#stageOutcome"),
  stageNarration: document.querySelector("#stageNarration"),
  plotMode: document.querySelector("#plotMode"),
  plotTitle: document.querySelector("#plotTitle"),
  populationPlot: document.querySelector("#populationPlot"),
  thresholdControls: document.querySelector("#thresholdControls"),
  weightBars: document.querySelector("#weightBars"),
  globalTraitName: document.querySelector("#globalTraitName"),
  globalTraitCategory: document.querySelector("#globalTraitCategory"),
  globalTraitUnit: document.querySelector("#globalTraitUnit"),
  globalTraitThreshold: document.querySelector("#globalTraitThreshold"),
  globalTraitMax: document.querySelector("#globalTraitMax"),
  globalTraitWeight: document.querySelector("#globalTraitWeight"),
  addGlobalTraitBtn: document.querySelector("#addGlobalTraitBtn"),
  populationSizeInput: document.querySelector("#populationSizeInput"),
  regeneratePopulationBtn: document.querySelector("#regeneratePopulationBtn"),
  populationMetricsInput: document.querySelector("#populationMetricsInput"),
  applyPopulationMetricsBtn: document.querySelector("#applyPopulationMetricsBtn"),
  eliteTable: document.querySelector("#eliteTable"),
  exportBtn: document.querySelector("#exportBtn"),
  clearLogBtn: document.querySelector("#clearLogBtn"),
  recordList: document.querySelector("#recordList"),
  loginRecordPanel: document.querySelector("#loginRecordPanel"),
  candidateDialog: document.querySelector("#candidateDialog"),
  candidateForm: document.querySelector("#candidateForm"),
  dialogTitle: document.querySelector("#dialogTitle"),
  candidateFields: document.querySelector("#candidateFields"),
  dialogScore: document.querySelector("#dialogScore"),
  saveCandidateBtn: document.querySelector("#saveCandidateBtn"),
  customTraitName: document.querySelector("#customTraitName"),
  customTraitUnit: document.querySelector("#customTraitUnit"),
  customTraitValue: document.querySelector("#customTraitValue"),
  customTraitWeight: document.querySelector("#customTraitWeight"),
  addCustomTraitBtn: document.querySelector("#addCustomTraitBtn"),
  loginDialog: document.querySelector("#loginDialog"),
  wechatName: document.querySelector("#wechatName"),
  wechatAccount: document.querySelector("#wechatAccount"),
  guestLoginBtn: document.querySelector("#guestLoginBtn"),
  wechatLoginBtn: document.querySelector("#wechatLoginBtn"),
  adminDialog: document.querySelector("#adminDialog"),
  adminForm: document.querySelector("#adminForm"),
  adminName: document.querySelector("#adminName"),
  adminPassword: document.querySelector("#adminPassword"),
  adminLoginFeedback: document.querySelector("#adminLoginFeedback"),
  adminLoginBtn: document.querySelector("#adminLoginBtn"),
  adminLogoutBtn: document.querySelector("#adminLogoutBtn")
};

let sceneAnimationFrame = null;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function normalNoise(scale = 1) {
  const u = 1 - Math.random();
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * scale;
}

function getTraits(species = state.selectedSpecies) {
  return Object.keys(species?.weights || {});
}

function normalizeTrait(trait, value) {
  const meta = traitCatalog[trait];
  return clamp((Number(value) - meta.min) / (meta.max - meta.min), 0, 1);
}

function scoreMetrics(metrics, species = state.selectedSpecies) {
  if (!species) return 0;
  return Object.entries(species.weights).reduce((sum, [trait, weight]) => {
    return sum + normalizeTrait(trait, metrics[trait]) * weight;
  }, 0) * 100;
}

function stageKey(stage = state.stage) {
  return `${state.selectedSpecies?.id || "none"}-${state.generation}-${stage}`;
}

function getCompletedSet(stage = state.stage) {
  const key = stageKey(stage);
  if (!state.completedActions[key]) state.completedActions[key] = new Set();
  if (Array.isArray(state.completedActions[key])) state.completedActions[key] = new Set(state.completedActions[key]);
  return state.completedActions[key];
}

function isStageComplete(stage = state.stage) {
  const simulation = stageSimulations[stage];
  if (!simulation) return true;
  return getCompletedSet(stage).size >= simulation.actions.length;
}

function dominantTraits(candidate) {
  return getTraits().map((trait) => ({
    trait,
    label: traitCatalog[trait].label,
    score: normalizeTrait(trait, candidate.metrics[trait])
  })).sort((a, b) => b.score - a.score).slice(0, 3).map((item) => item.label).join("、");
}

function makeCandidate(index) {
  const metrics = {};
  getTraits().forEach((trait) => {
    const meta = traitCatalog[trait];
    const center = meta.threshold + (meta.max - meta.min) * randomBetween(-0.18, 0.18);
    const value = clamp(center + normalNoise((meta.max - meta.min) * 0.12), meta.min, meta.max);
    metrics[trait] = Number(value.toFixed(meta.max <= 10 ? 1 : 2));
  });

  const score = scoreMetrics(metrics);
  return {
    id: `P${state.generation}-${String(index + 1).padStart(3, "0")}`,
    metrics,
    score,
    evaluated: false,
    elite: false,
    stage: "天然群体"
  };
}

function selectSpecies(speciesId) {
  state.selectedSpecies = state.resources.find((item) => item.id === speciesId) || state.resources[0];
  state.stage = 0;
  state.generation = 1;
  state.elites = [];
  state.trials = [];
  state.completedActions = {};
  generatePopulation();
  addRecord(`选择 ${state.selectedSpecies.name}（${state.selectedSpecies.scientific}）作为本轮选育对象，从${state.selectedSpecies.habitat}进入天然群体调查。`);
  renderAll();
}

function generatePopulation() {
  const defaultCount = state.selectedSpecies?.type === "fruit" ? 56 : 72;
  const count = clamp(Math.round(Number(state.populationSize) || defaultCount), 1, 500);
  state.candidates = Array.from({ length: count }, (_, index) => makeCandidate(index));
}

function filterResources() {
  const keyword = els.resourceSearch.value.trim().toLowerCase();
  const type = els.typeFilter.value;
  return state.resources.filter((item) => {
    const typeMatch = type === "all" || item.type === type;
    const haystack = `${item.name} ${item.scientific} ${item.family} ${item.genus || ""} ${item.region} ${item.objective}`.toLowerCase();
    return typeMatch && (!keyword || haystack.includes(keyword));
  });
}

function renderResources() {
  const filtered = filterResources();
  els.resourceCount.textContent = state.resources.length;
  els.speciesList.innerHTML = filtered.map((item) => `
    <button class="species-card ${state.selectedSpecies?.id === item.id ? "active" : ""}" type="button" data-species-id="${item.id}">
      <strong>${item.name}</strong>
      <span class="latin-name">${item.scientific}</span>
      <small>${item.genus ? `${item.genus} · ` : ""}${typeNames[item.type]} · ${item.region}</small>
    </button>
  `).join("");
}

function renderCourseMenu() {
  els.courseMenu.innerHTML = `
    <button class="course-root" type="button" data-mode="cover">开始 + 理论学习</button>
    ${programSteps.map((step, index) => `
      <button class="course-item ${index === state.stage ? "active" : ""} ${isStageComplete(index) ? "done" : ""}" type="button" data-menu-step="${index}">
        <span></span>${step.title}
      </button>
    `).join("")}
    <button class="course-root" type="button" data-mode="exam">考核模式</button>
  `;
}

function renderTheory() {
  const chapter = chapterKnowledge[state.theoryChapterIndex] || chapterKnowledge[0];
  const point = chapter.points[state.theoryKnowledgeIndex] || chapter.points[0];
  const slide = point.slides[state.theorySlideIndex] || point.slides[0];
  const deck = getCoursewareDeck(state.theoryChapterIndex);
  const isCoursewareSlide = slide.visual === "courseware";

  els.theoryList.innerHTML = chapterKnowledge.map((item, index) => `
    <button class="theory-tab ${index === state.theoryChapterIndex ? "active" : ""}" type="button" data-theory-index="${index}">
      <span>${index + 1}</span>
      ${item.title}
    </button>
  `).join("");

  els.knowledgeList.innerHTML = chapter.points.map((item, index) => `
    <button class="knowledge-tab ${index === state.theoryKnowledgeIndex ? "active" : ""}" type="button" data-knowledge-index="${index}">
      <small>知识点 ${index + 1}</small>
      <strong>${item.title}</strong>
    </button>
  `).join("");

  els.theoryStepLabel.textContent = `${chapter.title} · 知识页 ${state.theorySlideIndex + 1}`;
  els.theoryTitle.textContent = point.title;
  els.theoryTitle.toggleAttribute("contenteditable", isAdmin());
  els.theoryTitle.toggleAttribute("spellcheck", false);
  if (isAdmin()) {
    els.theoryTitle.dataset.theoryEdit = "pointTitle";
    els.theoryTitle.classList.add("admin-inline-edit");
  } else {
    delete els.theoryTitle.dataset.theoryEdit;
    els.theoryTitle.classList.remove("admin-inline-edit");
  }
  const nodes = point.nodes || chapter.nodes;
  els.chapterTopology.innerHTML = `
    <div class="topology-center">${point.title}</div>
    <div class="topology-nodes">
      ${nodes.map((node, index) => {
        const angle = (Math.PI * 2 * index / nodes.length) - Math.PI / 2;
        const left = 50 + Math.cos(angle) * 36;
        const top = 50 + Math.sin(angle) * 34;
        return `<span class="topology-node" style="left:${left.toFixed(2)}%; top:${top.toFixed(2)}%">${node}</span>`;
      }).join("")}
    </div>
  `;
  els.theoryBody.innerHTML = `
    <section class="ppt-slide ${isCoursewareSlide ? "courseware-text-slide" : ""}">
      ${isCoursewareSlide ? "" : `<div class="ppt-visual ${slide.visual || "concept"}">${renderPptVisual(slide.visual || "concept", point, chapter, slide)}</div>`}
      <div class="ppt-copy">
        <h3 ${editableAttr("slideTitle")}>${escapeHtml(slide.title || point.title)}</h3>
        ${renderSlideText(slide, point, chapter)}
      </div>
    </section>
  `;
  els.pptProgress.textContent = `${state.theorySlideIndex + 1}/${point.slides.length}`;
  els.prevSlideBtn.disabled = state.theorySlideIndex === 0;
  els.nextSlideBtn.textContent = state.theorySlideIndex === point.slides.length - 1 ? "下一知识点" : "下一页";
  renderTheoryAdminPanel(chapter, point, slide);
}

function renderTheoryAdminPanel(chapter, point, slide) {
  if (!els.theoryAdminPanel) return;
  els.theoryAdminPanel.classList.toggle("hidden-admin", !isAdmin());
  if (!isAdmin()) return;
  els.adminEditStatus.textContent = `${state.adminUser.name} 正在编辑`;
  els.adminChapterTitle.value = chapter.title || "";
  els.adminChapterSummary.value = chapter.summary || "";
  els.adminPointTitle.value = point.title || "";
  els.adminPointSummary.value = point.summary || "";
  els.adminPointNodes.value = (point.nodes || chapter.nodes || []).join("，");
  els.adminSlideTitle.value = slide.title || "";
  els.adminSlideText.value = slide.text || "";
  els.adminSlideImageUrl.value = slide.image || "";
  if (els.adminSlideImageFile) els.adminSlideImageFile.value = "";
}

function getCurrentTheoryRefs() {
  const chapter = chapterKnowledge[state.theoryChapterIndex] || chapterKnowledge[0];
  if (!chapter.points?.length) chapter.points = [{ title: '新增知识点', summary: '', nodes: [], slides: [] }];
  const point = chapter.points[state.theoryKnowledgeIndex] || chapter.points[0];
  if (!point.slides?.length) {
    point.slides = [{ label: '知识页1', title: point.title, text: point.summary || '', source: '管理员更新', visual: 'courseware', cards: [] }];
  }
  const slide = point.slides[state.theorySlideIndex] || point.slides[0];
  return { chapter, point, slide };
}

function readInlineEdit(field, fallback = '') {
  const node = document.querySelector(`[data-theory-edit='${field}']`) || document.querySelector(`[data-theory-edit="${field}"]`);
  return node ? node.textContent.trim() : fallback;
}

function readInlineEditList(field) {
  return [...document.querySelectorAll(`[data-theory-edit='${field}'], [data-theory-edit="${field}"]`)]
    .map((node) => node.textContent.trim())
    .filter(Boolean);
}

function splitTheoryList(value) {
  return String(value || '').split(/[，、;；\n]/).map((item) => item.trim()).filter(Boolean);
}

function saveCurrentTheoryEdit() {
  if (!isAdmin()) return showAdminDialog();
  const { chapter, point, slide } = getCurrentTheoryRefs();
  chapter.title = els.adminChapterTitle.value.trim() || chapter.title;
  chapter.summary = els.adminChapterSummary.value.trim();
  point.title = readInlineEdit('pointTitle', els.adminPointTitle.value.trim() || point.title);
  point.summary = readInlineEdit('pointSummary', els.adminPointSummary.value.trim() || point.summary || '');
  const inlineNodes = readInlineEditList('node');
  point.nodes = inlineNodes.length ? inlineNodes : splitTheoryList(els.adminPointNodes.value);
  slide.title = readInlineEdit('slideTitle', els.adminSlideTitle.value.trim() || point.title);
  const labels = readInlineEditList('cardLabel');
  const texts = readInlineEditList('cardText');
  slide.cards = texts.map((text, index) => ({ label: labels[index] || `知识点${index + 1}`, text }));
  slide.text = slide.cards.map((card) => `${card.label}：${card.text}`).join('\n') || els.adminSlideText.value.trim();
  slide.image = els.adminSlideImageUrl.value.trim();
  slide.source = '管理员编辑';
  slide.visual = slide.visual || 'courseware';
  saveTheoryOverrides();
  addRecord(`管理员更新理论知识：${chapter.title} / ${point.title}。`);
  renderAll();
}

function addKnowledgePoint() {
  if (!isAdmin()) return showAdminDialog();
  const { chapter } = getCurrentTheoryRefs();
  const title = els.adminPointTitle.value.trim() || `新增知识点${chapter.points.length + 1}`;
  const summary = els.adminPointSummary.value.trim() || '请继续补充该知识点的教学说明、实践目的和关键操作。';
  const nodes = splitTheoryList(els.adminPointNodes.value);
  chapter.points.push({
    title,
    summary,
    nodes: nodes.length ? nodes : [title, '目标', '方法', '应用'],
    slides: [{
      label: '知识页1',
      title,
      text: els.adminSlideText.value.trim() || summary,
      source: '管理员新增',
      image: els.adminSlideImageUrl.value.trim(),
      cards: getSlideCards({ text: els.adminSlideText.value.trim() || summary, visual: 'courseware' }, { title, summary, nodes }, chapter),
      visual: 'courseware'
    }]
  });
  state.theoryKnowledgeIndex = chapter.points.length - 1;
  state.theorySlideIndex = 0;
  saveTheoryOverrides();
  addRecord(`管理员新增知识点：${chapter.title} / ${title}。`);
  renderAll();
}

function addTheorySlide() {
  if (!isAdmin()) return showAdminDialog();
  const { chapter, point } = getCurrentTheoryRefs();
  const index = point.slides.length + 1;
  point.slides.push({
    label: `知识页${index}`,
    title: els.adminSlideTitle.value.trim() || `${point.title} 补充 ${index}`,
    text: els.adminSlideText.value.trim() || point.summary || '请补充本页知识内容。',
    source: '管理员新增',
    image: els.adminSlideImageUrl.value.trim(),
    cards: getSlideCards({ text: els.adminSlideText.value.trim() || point.summary || '', visual: 'courseware' }, point, chapter),
    visual: 'courseware'
  });
  state.theorySlideIndex = point.slides.length - 1;
  saveTheoryOverrides();
  addRecord(`管理员为 ${point.title} 新增 1 页知识内容。`);
  renderAll();
}

function deleteCurrentTheorySlide() {
  if (!isAdmin()) return showAdminDialog();
  const { point } = getCurrentTheoryRefs();
  if (point.slides.length <= 1) {
    addRecord('当前知识点至少需要保留 1 页内容，不能继续删除。');
    renderRecords();
    return;
  }
  point.slides.splice(state.theorySlideIndex, 1);
  state.theorySlideIndex = Math.max(0, Math.min(state.theorySlideIndex, point.slides.length - 1));
  saveTheoryOverrides();
  addRecord(`管理员删除 ${point.title} 的 1 页知识内容。`);
  renderAll();
}

function loadAdminImageFile(file) {
  if (!file || !isAdmin()) return;
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    els.adminSlideImageUrl.value = String(reader.result || '');
    saveCurrentTheoryEdit();
  });
  reader.readAsDataURL(file);
}

function resetTheoryOverrides() {
  if (!isAdmin()) return showAdminDialog();
  safeStorageRemove('local', 'forestBreedingTheoryOverrides');
  addRecord('管理员已恢复默认理论内容，页面将重新载入。');
  renderRecords();
  window.location.reload();
}

function renderPptVisual(type, point, chapter, slide = {}) {
  const nodeBadges = (point.nodes || chapter.nodes || []).slice(0, 5).map((node) => `<span>${escapeHtml(node)}</span>`).join('');
  const icons = { concept: '概', textbook: '书', pipeline: '序', keywords: '词', materials: '材', flow: '流', data: '数', warning: '!', case: '例', quiz: '?' };
  if (type === 'flow' || type === 'pipeline') {
    return `<div class='visual-flow'><b>目标</b><i></i><b>材料</b><i></i><b>操作</b><i></i><b>测定</b><i></i><b>应用</b></div>`;
  }
  if (type === 'data') {
    return `<div class='visual-table'><span>树高</span><strong>23.6 m</strong><span>胸径</span><strong>29.4 cm</strong><span>育种值</span><strong>+12.8</strong></div>`;
  }
  if (type === 'topology') {
    return `<div class='visual-topology'><strong>${escapeHtml(point.title)}</strong><div>${nodeBadges}</div></div>`;
  }
  return `<div class='visual-symbol'><strong>${icons[type] || '知'}</strong><span>${escapeHtml(slide.label || point.title)}</span></div>`;
}
function setMode(mode) {
  document.querySelectorAll("[data-mode]").forEach((item) => {
    item.classList.toggle("active", item.dataset.mode === mode || (mode === "theory" && item.dataset.mode === "cover"));
  });
  els.theoryModule.classList.toggle("hidden-module", mode !== "theory" && mode !== "cover");
  els.practiceModule.classList.toggle("hidden-module", mode !== "practice");
  els.examModule.classList.toggle("hidden-module", mode !== "exam");
  if (mode === "theory" || mode === "cover") {
    state.theoryChapterIndex = Math.max(0, Math.min(state.theoryChapterIndex, chapterKnowledge.length - 1));
    state.theoryKnowledgeIndex = Math.max(0, Math.min(state.theoryKnowledgeIndex, chapterKnowledge[state.theoryChapterIndex].points.length - 1));
    renderTheory();
    markLearner();
  }
  if (mode === "practice") markLearner();
  renderStats();
}

function markLearner() {
  if (safeStorageGet("session", "forestBreedingLearnerSession")) return;
  safeStorageSet("session", "forestBreedingLearnerSession", "1");
  learningStats.learners += 1;
  safeStorageSet("local", "forestBreedingLearners", String(learningStats.learners));
}

function renderStats() {
  els.visitorStats.textContent = `访问 ${learningStats.visits} · 学习 ${learningStats.learners}`;
  if (els.loginStatusBtn) {
    els.loginStatusBtn.textContent = state.loginUser ? `${state.loginUser.name}` : "微信登录";
  }
  if (els.adminStatusBtn) {
    els.adminStatusBtn.textContent = state.adminUser ? `管理员：${state.adminUser.name}` : "管理员";
    els.adminStatusBtn.classList.toggle("active-admin", Boolean(state.adminUser));
  }
}

function loadLoginUser() {
  try {
    const saved = JSON.parse(safeStorageGet("local", "forestBreedingLoginUser", "null"));
    if (saved?.account) state.loginUser = saved;
  } catch {
    safeStorageRemove("local", "forestBreedingLoginUser");
  }
}

function loadAdminUser() {
  try {
    const saved = JSON.parse(safeStorageGet("session", "forestBreedingAdminUser", "null"));
    if (saved?.name) state.adminUser = saved;
  } catch {
    safeStorageRemove("session", "forestBreedingAdminUser");
  }
}

function isAdmin() {
  return Boolean(state.adminUser);
}

function showAdminDialog() {
  if (state.adminUser) {
    enterAdminEditMode();
    return;
  }
  if (els.adminDialog?.showModal) {
    els.adminName.value = state.adminUser?.name || "admin";
    els.adminPassword.value = "";
    if (els.adminLoginFeedback) els.adminLoginFeedback.textContent = "";
    els.adminDialog.showModal();
  }
}

function enterAdminEditMode() {
  setMode("theory");
  renderAll();
  requestAnimationFrame(() => {
    const target = els.theoryAdminPanel || els.theoryModule;
    target?.classList.add("admin-focus-ring");
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
    els.adminPointTitle?.focus({ preventScroll: true });
    window.setTimeout(() => target?.classList.remove("admin-focus-ring"), 1800);
  });
}

function loginAdmin(event) {
  event?.preventDefault();
  const name = els.adminName.value.trim();
  const password = els.adminPassword.value.trim();
  if (els.adminLoginFeedback) els.adminLoginFeedback.textContent = "";
  const expectedPassword = ["forest", "2026"].join("");
  if (name === "admin" && password === expectedPassword) {
    state.adminUser = {
      name,
      loginAt: new Date().toLocaleString("zh-CN", { hour12: false })
    };
    safeStorageSet("session", "forestBreedingAdminUser", JSON.stringify(state.adminUser));
    addRecord(`管理员 ${name} 登录，可编辑理论知识与仿真参数。`);
    els.adminDialog?.close();
    enterAdminEditMode();
    return;
  }
  if (els.adminLoginFeedback) els.adminLoginFeedback.textContent = "账号或密码不正确，请重新输入管理员凭据。";
  addRecord("管理员登录失败：账号或密码不正确。");
  renderRecords();
}

function logoutAdmin() {
  state.adminUser = null;
  safeStorageRemove("session", "forestBreedingAdminUser");
  addRecord("管理员已退出编辑模式。");
  els.adminDialog?.close();
  renderAll();
}

function logoutAllUsers() {
  const hadLogin = Boolean(state.loginUser || state.adminUser);
  state.loginUser = null;
  state.adminUser = null;
  safeStorageRemove("local", "forestBreedingLoginUser");
  safeStorageRemove("session", "forestBreedingAdminUser");
  els.loginDialog?.close();
  els.adminDialog?.close();
  addRecord(hadLogin ? "已退出管理员与访客/微信登录状态。" : "当前没有已登录账号。");
  renderAll();
}

function recordLogin(user) {
  state.loginUser = user;
  const record = {
    ...user,
    loginAt: new Date().toLocaleString("zh-CN", { hour12: false })
  };
  state.loginRecords.unshift(record);
  state.loginRecords = state.loginRecords.slice(0, 80);
  safeStorageSet("local", "forestBreedingLoginUser", JSON.stringify(user));
  safeStorageSet("local", "forestBreedingLoginRecords", JSON.stringify(state.loginRecords));
  addRecord(`登录记录：${user.name}（${user.account}）进入仿真实践。`);
  renderStats();
  renderRecords();
}

function showLoginDialog(force = false) {
  if (!force && state.loginUser) return;
  if (els.loginDialog?.showModal) {
    els.loginDialog.showModal();
  }
}

function loginAsGuest() {
  recordLogin({
    name: "游客",
    account: `guest-${Date.now()}`,
    method: "guest"
  });
  els.loginDialog?.close();
}

function loginWithWechat() {
  const name = els.wechatName.value.trim();
  const account = els.wechatAccount.value.trim();
  if (!name || !account) {
    addRecord("微信登录提示：请填写微信昵称和微信账号 / OpenID。");
    renderRecords();
    return;
  }
  recordLogin({
    name,
    account,
    method: "wechat-demo"
  });
  els.loginDialog?.close();
}

function renderSpeciesContext() {
  if (!state.selectedSpecies) return;
  const item = state.selectedSpecies;
  els.selectedSpeciesName.textContent = `${item.name} 选育仿真`;
  els.selectedSpeciesMeta.innerHTML = `${item.family} · <span class="latin-name">${escapeHtml(item.scientific)}</span> · ${item.region} · 目标：${item.objective}`;
}

function renderSteps() {
  els.stepTrack.innerHTML = programSteps.map((step, index) => `
    <button class="step-item ${index === state.stage ? "active" : ""} ${isStageComplete(index) ? "done" : ""}" type="button" data-step="${index}">
      <span>${index + 1}</span>
      <strong>${step.title}</strong>
      <small>${step.detail}</small>
    </button>
  `).join("");
}

function renderPlot() {
  const step = programSteps[state.stage];
  els.plotMode.textContent = state.stage < 2 ? "Natural Population" : "Breeding Program";
  els.plotTitle.textContent = `${step.title}：${state.selectedSpecies?.name || ""}`;

  const visible = state.stage >= 4 && state.trials.length ? state.trials : state.candidates;
  els.populationPlot.innerHTML = visible.map((candidate) => {
    const shade = Math.round(86 - candidate.score * 0.48);
    return `
      <button class="plant-node ${candidate.evaluated ? "scored" : ""} ${candidate.elite ? "elite" : ""}" 
        type="button" style="--shade:${shade}%"
        data-candidate-id="${candidate.id}"
        title="${candidate.id} 缁煎悎鎸囨暟 ${candidate.score.toFixed(2)}">
        <span>${candidate.id}</span>
      </button>
    `;
  }).join("");
}

function renderScene() {
  const simulation = stageSimulations[state.stage];
  const brief = stageBriefs[state.stage];
  const knowledge = stageKnowledgeCards[state.stage] || stageKnowledgeCards[0];
  const dialogue = stageTeamDialogues[state.stage] || stageTeamDialogues[0];
  const completed = getCompletedSet();
  const nextAction = simulation.actions.find((action) => !completed.has(action.id));
  const roleLabels = ['林地调查员 · 布设样地与测量单株', '优树选择员 · 综合评分与挂牌采样', '种源试验员 · 整理种源并布设区组', '杂交育种员 · 选择亲本与控制授粉', '遗传测定员 · 建立测定林并估算育种值', '品种评价员 · 稳定性与品质复核', '种子园管理员 · 配置亲本与花粉管理', '采穗圃管理员 · 采穗复壮与生根繁殖', '苗木质检员 · 良种繁育与出圃投放', '育种策略师 · 汇总反馈进入下一轮'];
  els.sceneTitle.textContent = simulation.title;
  els.roleStatus.textContent = roleLabels[state.stage] || '研究者角色';
  els.sceneSubtitle.textContent = simulation.subtitle;
  els.sceneProgress.textContent = `${completed.size}/${simulation.actions.length}`;
  els.sceneGate.textContent = isStageComplete() ? '本步骤已解锁' : '完成操作点后解锁';
  els.sceneGate.className = `scene-gate ${isStageComplete() ? 'unlocked' : ''}`;
  els.stageBrief.innerHTML = `
    <div><strong>实验目标</strong><span>${brief.objective}</span></div>
    <div><strong>实验原理</strong><span>${brief.principle}</span></div>
    <div><strong>阶段产出</strong><span>${brief.output}</span></div>
  `;
  els.missionBoard.innerHTML = `
    <div class='mission-head'>
      <strong>当前任务</strong>
      <span>${nextAction ? nextAction.label : '本步骤已完成'}</span>
    </div>
    <ol>
      ${simulation.actions.map((action, index) => `
        <li class='${completed.has(action.id) ? 'done' : ''} ${nextAction?.id === action.id ? 'current' : ''}'>
          <span>${completed.has(action.id) ? '✓' : index + 1}</span>
          <p><strong>${action.label}</strong><small>${action.hint}</small></p>
        </li>
      `).join('')}
    </ol>
  `;
  els.knowledgeEmbed.innerHTML = `
    <strong>${knowledge.chapter}</strong>
    <p>${knowledge.focus}</p>
    <dl>
      <div><dt>操作方法</dt><dd>${knowledge.method}</dd></div>
      <div><dt>注意点</dt><dd>${knowledge.caution}</dd></div>
    </dl>
  `;
  els.teamDialogue.innerHTML = dialogue.map((line, index) => `<p><span>研究者${index + 1}</span>${line.replace(/^.*?：/, '')}</p>`).join('');
  els.sceneVisual.className = `scene-visual stage-${state.stage}`;
  const hotspotPositions = [
    [17, 58],
    [28, 52],
    [40, 60],
    [52, 52],
    [64, 60],
    [75, 52],
    [84, 60],
    [92, 52]
  ];
  const hotspotStyle = (index) => {
    const [x, y] = hotspotPositions[index] || [12 + index * 10, 58];
    return `--x:${x}%;--y:${y}%;--i:${index + 1}`;
  };
  els.sceneVisual.innerHTML = `
    <div class='scene-title-card'>
      <strong>${programSteps[state.stage].title}</strong>
      <span>${simulation.title}</span>
    </div>
    <div class='scene-data-card'>
      <strong>${state.selectedSpecies?.name || '林木材料'}</strong>
      <span>${nextAction ? nextAction.label : '本步骤已完成'}</span>
      <small>${brief.output}</small>
    </div>
    <canvas id='sceneCanvas' class='scene-canvas' aria-hidden='true'></canvas>
    <div class='scene-ground'></div>
    ${simulation.elements.map((item) => `<span class='scene-object ${item}' aria-hidden='true'></span>`).join('')}
    <div class='scene-operator'>
      <span class='operator-head'></span>
      <span class='operator-body'></span>
      <span class='operator-tool'></span>
    </div>
    ${simulation.actions.map((action, index) => `
      <button class='scene-hotspot ${completed.has(action.id) ? 'done' : ''} ${nextAction?.id === action.id ? 'pulse' : ''}'
        type='button' data-action-id='${action.id}' style='${hotspotStyle(index)}'>
        <span>${completed.has(action.id) ? '✓' : index + 1}</span>
        <small>${action.label}</small>
      </button>
    `).join('')}
    <div class='scene-narration'>
      <b>语音提示</b><span>${nextAction ? nextAction.hint : '本步骤完成，可进入下一阶段。'}</span>
    </div>
  `;
  startSceneAnimation();
}
function startSceneAnimation() {
  if (sceneAnimationFrame) cancelAnimationFrame(sceneAnimationFrame);
  const canvas = document.querySelector("#sceneCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  resize();

  const renderFrame = (time) => {
    const rect = canvas.getBoundingClientRect();
    drawBreedingScene(ctx, rect.width, rect.height, time / 1000, state.stage);
    sceneAnimationFrame = requestAnimationFrame(renderFrame);
  };
  sceneAnimationFrame = requestAnimationFrame(renderFrame);
}

function drawBreedingScene(ctx, width, height, time, stage) {
  ctx.clearRect(0, 0, width, height);
  drawSky(ctx, width, height);
  const groundY = height * 0.62;
  drawGround(ctx, width, height, groundY, stage);

  if (stage <= 1) drawForestSurvey(ctx, width, height, time, stage);
  if (stage === 2) drawProvenanceTrial(ctx, width, height, time);
  if (stage === 3) drawVariationWork(ctx, width, height, time);
  if (stage === 4) drawGeneticTest(ctx, width, height, time);
  if (stage === 5) drawVarietySelection(ctx, width, height, time);
  if (stage === 6) drawSeedOrchard(ctx, width, height, time);
  if (stage === 7) drawScionGarden(ctx, width, height, time);
  if (stage === 8) drawDeployment(ctx, width, height, time);
  if (stage === 9) drawRecurrentCycle(ctx, width, height, time);

  drawResearchTeam(ctx, width, height, time, stage);
  drawStageCaption(ctx, width, height, programSteps[stage].title);
  drawLiveDataPanel(ctx, width, height, stage, time);
}

function drawSky(ctx, width, height) {
  const sky = ctx.createLinearGradient(0, 0, 0, height * 0.64);
  sky.addColorStop(0, "#b9dcea");
  sky.addColorStop(0.62, "#eaf4ee");
  sky.addColorStop(1, "#f6f8f5");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(255,255,255,0.58)";
  drawCloud(ctx, width * 0.18, height * 0.16, 1);
  drawCloud(ctx, width * 0.72, height * 0.12, 0.72);
}

function drawCloud(ctx, x, y, scale) {
  ctx.beginPath();
  ctx.ellipse(x, y, 48 * scale, 16 * scale, 0, 0, Math.PI * 2);
  ctx.ellipse(x + 36 * scale, y + 3 * scale, 34 * scale, 13 * scale, 0, 0, Math.PI * 2);
  ctx.ellipse(x - 32 * scale, y + 4 * scale, 28 * scale, 12 * scale, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawGround(ctx, width, height, groundY, stage) {
  const ground = ctx.createLinearGradient(0, groundY, 0, height);
  ground.addColorStop(0, stage <= 1 ? "#c8dcc1" : "#d7e3c9");
  ground.addColorStop(1, "#a9c49d");
  ctx.fillStyle = ground;
  ctx.fillRect(0, groundY, width, height - groundY);
  ctx.strokeStyle = "rgba(31,111,74,0.18)";
  ctx.lineWidth = 1;
  for (let y = groundY + 18; y < height; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(width * 0.25, y - 10, width * 0.72, y + 10, width, y - 5);
    ctx.stroke();
  }
}

function drawForestSurvey(ctx, width, height, time, stage) {
  const treeXs = [0.42, 0.54, 0.66, 0.78, 0.88];
  treeXs.forEach((x, index) => {
    drawRealTree(ctx, width * x, height * (0.58 + (index % 2) * 0.04), 0.9 + index * 0.06, index === 2 && stage === 1);
  });

  ctx.strokeStyle = "rgba(196,138,29,0.85)";
  ctx.setLineDash([6, 6]);
  ctx.lineWidth = 2;
  ctx.strokeRect(width * 0.36, height * 0.44, width * 0.52, height * 0.34);
  ctx.setLineDash([]);

  const beamX = width * (0.22 + Math.sin(time * 0.9) * 0.02);
  ctx.strokeStyle = "rgba(55,111,159,0.62)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(beamX, height * 0.52);
  ctx.lineTo(width * 0.58, height * 0.25);
  ctx.stroke();

  ctx.fillStyle = "rgba(31,111,74,0.9)";
  ctx.fillRect(width * 0.58 - 5, height * 0.25, 10, height * 0.43);
}

function drawRealTree(ctx, x, baseY, scale, elite = false) {
  ctx.fillStyle = "#765237";
  ctx.fillRect(x - 8 * scale, baseY - 86 * scale, 16 * scale, 86 * scale);
  const colors = elite ? ["#2f8c58", "#4fa96e", "#c48a1d"] : ["#246f46", "#2f8050", "#3e925d"];
  colors.forEach((color, index) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x + (index - 1) * 10 * scale, baseY - (98 + index * 20) * scale, (42 - index * 4) * scale, (36 - index * 4) * scale, 0, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawResearcher(ctx, x, y, time, stage) {
  const bob = Math.sin(time * 4) * 2;
  ctx.save();
  ctx.translate(x, y + bob);
  ctx.fillStyle = "#f0c69e";
  ctx.beginPath();
  ctx.arc(0, -58, 11, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#2f7991";
  ctx.fillRect(-12, -46, 24, 34);
  ctx.fillStyle = "#273c35";
  ctx.fillRect(-11, -12, 9, 32);
  ctx.fillRect(3, -12, 9, 32);
  ctx.strokeStyle = "#36443d";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-11, -34);
  ctx.lineTo(-28, -18);
  ctx.moveTo(11, -34);
  ctx.lineTo(36, stage <= 1 ? -26 : -18);
  ctx.stroke();
  if (stage <= 1) {
    ctx.strokeStyle = "#376f9f";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(36, -26);
    ctx.lineTo(84, -54);
    ctx.stroke();
  }
  ctx.restore();
}

function drawResearchTeam(ctx, width, height, time, stage) {
  const baseY = height * 0.58;
  const x1 = width * (0.15 + Math.sin(time * 0.55) * 0.02);
  const x2 = width * (0.23 + Math.cos(time * 0.5) * 0.018);
  const x3 = width * (0.3 + Math.sin(time * 0.45 + 1) * 0.015);
  drawResearcherAvatar(ctx, x1, baseY, time, '#2f7991', '测量员', stage <= 1 ? '测树高' : '记录数据');
  drawResearcherAvatar(ctx, x2, baseY + 8, time + 0.5, '#7a8b45', '记录员', stage <= 2 ? '编号' : '复核');
  drawResearcherAvatar(ctx, x3, baseY + 4, time + 1, '#9b3d58', '育种员', stage >= 3 ? '授粉/测定' : '采样');
  if (Math.floor(time) % 6 < 3) {
    drawSpeech(ctx, x2 + 18, baseY - 118, stageDialogue(stage));
  }
}

function drawResearcherAvatar(ctx, x, y, time, coat, role, toolText) {
  const bob = Math.sin(time * 4) * 2;
  ctx.save();
  ctx.translate(x, y + bob);
  ctx.fillStyle = 'rgba(0,0,0,0.12)';
  ctx.beginPath();
  ctx.ellipse(0, 22, 26, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#f0c69e';
  ctx.beginPath();
  ctx.arc(0, -58, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#29342f';
  ctx.beginPath();
  ctx.arc(0, -64, 12, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = coat;
  ctx.fillRect(-13, -45, 26, 34);
  ctx.fillStyle = '#26352e';
  ctx.fillRect(-11, -11, 9, 31);
  ctx.fillRect(3, -11, 9, 31);
  ctx.strokeStyle = '#36443d';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-11, -34);
  ctx.lineTo(-30, -18);
  ctx.moveTo(11, -34);
  ctx.lineTo(34, -24);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  roundRect(ctx, -34, -102, 68, 25, 5);
  ctx.fill();
  ctx.fillStyle = '#26352e';
  ctx.font = '13px KaiTi, Microsoft YaHei, Arial';
  ctx.fillText(role, -24, -85);
  ctx.fillStyle = '#19758a';
  ctx.fillText(toolText, -26, -66);
  ctx.restore();
}

function drawSpeech(ctx, x, y, text) {
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  roundRect(ctx, x, y, 150, 42, 8);
  ctx.fill();
  ctx.fillStyle = '#26352e';
  ctx.font = '15px KaiTi, Microsoft YaHei, Arial';
  ctx.fillText(text, x + 12, y + 26);
}

function stageDialogue(stage) {
  return [
    '先量样地，再测单株。',
    '这株干形好，先挂牌。',
    '种源编号不要混。',
    '套袋后记录组合。',
    '多地点数据要复核。',
    '稳定性也要考虑。',
    '检查花粉隔离。',
    '穗条批次要追踪。',
    '苗木质检后出圃。',
    '数据进入下一轮。'
  ][stage] || '继续记录。';
}
function drawProvenanceTrial(ctx, width, height, time) {
  drawTrialGrid(ctx, width * 0.34, height * 0.42, width * 0.55, height * 0.36, 5, 6, ["#cfe0d2", "#e9f1ea", "#d5e7c1"]);
  for (let i = 0; i < 5; i += 1) {
    ctx.fillStyle = ["#9b3d58", "#c48a1d", "#19758a", "#1f6f4a", "#376f9f"][i];
    ctx.fillRect(width * (0.38 + i * 0.095), height * 0.36, 24, 18);
  }
  drawWeatherStation(ctx, width * 0.84, height * 0.55, time);
}

function drawTrialGrid(ctx, x, y, w, h, rows, cols, colors) {
  const cellW = w / cols;
  const cellH = h / rows;
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      ctx.fillStyle = colors[(r + c) % colors.length];
      ctx.fillRect(x + c * cellW + 2, y + r * cellH + 2, cellW - 4, cellH - 4);
      ctx.fillStyle = "rgba(31,111,74,0.55)";
      ctx.fillRect(x + c * cellW + cellW * 0.45, y + r * cellH + 6, 4, cellH - 12);
    }
  }
}

function drawWeatherStation(ctx, x, y, time) {
  ctx.strokeStyle = "#6e8795";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - 86);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.fillRect(x - 20, y - 70, 40, 28);
  ctx.strokeStyle = "#c48a1d";
  ctx.beginPath();
  ctx.arc(x, y - 98, 12 + Math.sin(time * 3) * 2, 0, Math.PI * 2);
  ctx.stroke();
}

function drawVariationWork(ctx, width, height, time) {
  drawRealTree(ctx, width * 0.47, height * 0.68, 0.85, true);
  drawRealTree(ctx, width * 0.7, height * 0.68, 0.85, false);
  ctx.strokeStyle = "rgba(155,61,88,0.88)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(width * 0.49, height * 0.36);
  ctx.bezierCurveTo(width * 0.55, height * 0.25, width * 0.64, height * 0.25, width * 0.69, height * 0.38);
  ctx.stroke();
  for (let i = 0; i < 12; i += 1) {
    ctx.fillStyle = `rgba(196,138,29,${0.28 + Math.sin(time * 2 + i) * 0.18})`;
    ctx.beginPath();
    ctx.arc(width * (0.52 + i * 0.015), height * (0.34 + Math.sin(time + i) * 0.035), 4, 0, Math.PI * 2);
    ctx.fill();
  }
  drawLabBench(ctx, width * 0.78, height * 0.68, time);
}

function drawLabBench(ctx, x, y, time) {
  ctx.fillStyle = "#f8fbff";
  ctx.fillRect(x - 70, y - 58, 140, 58);
  ctx.fillStyle = "#19758a";
  ctx.fillRect(x - 48, y - 86, 20, 38);
  ctx.fillStyle = "#c48a1d";
  ctx.fillRect(x - 8, y - 96, 20, 48);
  ctx.strokeStyle = "#9b3d58";
  ctx.beginPath();
  ctx.arc(x + 45, y - 70, 18 + Math.sin(time * 2) * 2, 0, Math.PI * 2);
  ctx.stroke();
}

function drawGeneticTest(ctx, width, height, time) {
  drawTrialGrid(ctx, width * 0.32, height * 0.42, width * 0.44, height * 0.36, 4, 8, ["#d7ead5", "#c8dcc1"]);
  drawChart(ctx, width * 0.78, height * 0.68, time, ["#19758a", "#c48a1d", "#9b3d58", "#376f9f"]);
}

function drawChart(ctx, x, y, time, colors) {
  ctx.fillStyle = "rgba(255,255,255,0.88)";
  ctx.fillRect(x - 62, y - 112, 124, 92);
  colors.forEach((color, i) => {
    ctx.fillStyle = color;
    const h = 24 + Math.sin(time * 1.4 + i) * 5 + i * 13;
    ctx.fillRect(x - 48 + i * 24, y - 28 - h, 16, h);
  });
}

function drawVarietySelection(ctx, width, height, time) {
  drawTrialGrid(ctx, width * 0.34, height * 0.44, width * 0.38, height * 0.32, 4, 6, ["#d7ead5", "#f0e7c8", "#d7e7ef"]);
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.fillRect(width * 0.73, height * 0.34, 120, 128);
  ctx.strokeStyle = "#c48a1d";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(width * 0.75, height * 0.49);
  ctx.lineTo(width * 0.79, height * 0.56);
  ctx.lineTo(width * 0.87, height * 0.4);
  ctx.stroke();
  drawChart(ctx, width * 0.56, height * 0.58, time, ["#1f6f4a", "#19758a", "#c48a1d"]);
}

function drawSeedOrchard(ctx, width, height, time) {
  for (let r = 0; r < 3; r += 1) {
    for (let c = 0; c < 6; c += 1) {
      drawRealTree(ctx, width * (0.36 + c * 0.09), height * (0.54 + r * 0.09), 0.45, (r + c) % 4 === 0);
    }
  }
  ctx.fillStyle = `rgba(196,138,29,${0.28 + Math.sin(time * 2) * 0.08})`;
  ctx.beginPath();
  ctx.ellipse(width * 0.72, height * 0.34, 95, 32, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawScionGarden(ctx, width, height, time) {
  drawTrialGrid(ctx, width * 0.34, height * 0.48, width * 0.5, height * 0.24, 3, 9, ["#cfe0d2", "#e8f0ea"]);
  ctx.fillStyle = "#f8fbff";
  ctx.fillRect(width * 0.68, height * 0.34, 130, 84);
  ctx.strokeStyle = `rgba(55,111,159,${0.36 + Math.sin(time * 4) * 0.16})`;
  for (let i = 0; i < 6; i += 1) {
    ctx.beginPath();
    ctx.moveTo(width * 0.7 + i * 18, height * 0.34);
    ctx.lineTo(width * 0.68 + i * 18, height * 0.45);
    ctx.stroke();
  }
}

function drawDeployment(ctx, width, height, time) {
  drawTrialGrid(ctx, width * 0.35, height * 0.45, width * 0.34, height * 0.28, 3, 7, ["#d7ead5", "#c8dcc1"]);
  const tx = width * (0.72 - Math.sin(time * 0.9) * 0.05);
  ctx.fillStyle = "#376f9f";
  ctx.fillRect(tx, height * 0.58, 116, 50);
  ctx.fillStyle = "#dbe8ed";
  ctx.fillRect(tx + 72, height * 0.54, 44, 54);
  ctx.fillStyle = "#17211d";
  ctx.beginPath();
  ctx.arc(tx + 28, height * 0.64, 12, 0, Math.PI * 2);
  ctx.arc(tx + 90, height * 0.64, 12, 0, Math.PI * 2);
  ctx.fill();
}

function drawRecurrentCycle(ctx, width, height, time) {
  ctx.strokeStyle = "#19758a";
  ctx.lineWidth = 16;
  ctx.beginPath();
  ctx.arc(width * 0.58, height * 0.48, 96, time * 0.35, time * 0.35 + Math.PI * 1.65);
  ctx.stroke();
  drawChart(ctx, width * 0.36, height * 0.68, time, ["#19758a", "#c48a1d", "#9b3d58"]);
  ctx.fillStyle = "rgba(255,255,255,0.88)";
  ctx.fillRect(width * 0.67, height * 0.36, 118, 92);
  ctx.fillStyle = "#1f6f4a";
  ctx.fillText("G1", width * 0.7, height * 0.43);
  ctx.fillText("G2", width * 0.77, height * 0.5);
}

function drawStageCaption(ctx, width, height, text) {
  ctx.fillStyle = "rgba(255,255,255,0.84)";
  ctx.fillRect(18, 18, Math.min(320, width - 36), 48);
  ctx.fillStyle = "#17211d";
  ctx.font = "700 18px Microsoft YaHei, Arial";
  ctx.fillText(text, 34, 49);
}

function drawLiveDataPanel(ctx, width, height, stage, time) {
  const panels = [
    ["样地 20m x 20m", `树高 ${(22 + Math.sin(time) * 1.4).toFixed(1)} m`, `胸径 ${(28 + Math.cos(time) * 2.2).toFixed(1)} cm`],
    ["优树综合指数", `材积 ${(0.72 + Math.sin(time) * 0.05).toFixed(2)} m3`, "优树候选 12 株"],
    ["种源试验", "随机区组 4 重复", "来源地 6 个生态区"],
    ["控制授粉", "亲本组合 A x B", "套袋编号 24-06"],
    ["遗传测定", `遗传力 h2 ${(0.31 + Math.sin(time) * 0.03).toFixed(2)}`, "BLUP 育种值排序"],
    ["品种选择", "稳定性 AMMI/GGE", "品质复核通过"],
    ["种子园", "无性系配置 30 个", "花粉污染监测"],
    ["采穗圃", "母株身份校验", "生根率 86%"],
    ["良种繁育", "苗木质检合格", "适生区投放"],
    ["循环改良", "保留核心种质", "更新选择指数"]
  ];
  const lines = panels[stage] || panels[0];
  const x = Math.max(20, width - 250);
  const y = 18;
  ctx.fillStyle = "rgba(255,255,255,0.88)";
  roundRect(ctx, x, y, 222, 94, 8);
  ctx.fill();
  ctx.fillStyle = "#19758a";
  ctx.font = "700 15px KaiTi, Microsoft YaHei, Arial";
  ctx.fillText(lines[0], x + 14, y + 26);
  ctx.fillStyle = "#58645e";
  ctx.font = "14px KaiTi, Microsoft YaHei, Arial";
  ctx.fillText(lines[1], x + 14, y + 54);
  ctx.fillText(lines[2], x + 14, y + 76);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
}

function renderThresholds() {
  els.thresholdControls.innerHTML = getTraits().map((trait) => {
    const meta = traitCatalog[trait];
    return `
      <label class='threshold-field'>
        <span>${meta.label}下限 <output id='th-${trait}'>${meta.threshold}</output>${meta.unit}</span>
        <input type='range' min='${meta.min}' max='${meta.max}' step='${meta.max <= 10 ? 0.5 : 1}' value='${meta.threshold}' data-threshold='${trait}'>
      </label>
    `;
  }).join('');
}

function renderPopulationBuilder() {
  if (!els.populationSizeInput || !state.selectedSpecies) return;
  if (document.activeElement !== els.populationSizeInput) {
    els.populationSizeInput.value = String(state.populationSize || state.candidates.length || (state.selectedSpecies.type === 'fruit' ? 56 : 72));
  }
  if (els.populationMetricsInput && document.activeElement !== els.populationMetricsInput) {
    const traits = getTraits().slice(0, 6);
    const header = ['id', ...traits].join(',');
    const values = ['P1-001', ...traits.map((trait) => traitCatalog[trait]?.threshold ?? 1)].join(',');
    els.populationMetricsInput.placeholder = `CSV示例：\n${header}\n${values}\n\n也可粘贴 JSON 数组：\n[{ 'id': 'P1-001', 'metrics': { '${traits[0] || 'treeHeight'}': 23.5 } }]`.replace(/'/g, '"');
  }
}

function ensureSimulationLogin() {
  if (state.loginUser) return true;
  addRecord('请先以游客或微信账号登录，再设置群体大小或导入个体指标。');
  renderRecords();
  showLoginDialog(true);
  return false;
}

function regeneratePopulationFromInput() {
  if (!ensureSimulationLogin()) return;
  const size = clamp(Math.round(Number(els.populationSizeInput.value) || 0), 1, 500);
  state.populationSize = size;
  safeStorageSet('local', 'forestBreedingPopulationSize', String(size));
  state.stage = 0;
  state.elites = [];
  state.trials = [];
  state.completedActions = {};
  generatePopulation();
  addRecord(`按用户设置生成 ${size} 个 ${state.selectedSpecies.name} 候选个体。`);
  renderAll();
}

function traitKeyFromHeader(header) {
  const name = String(header || '').trim();
  if (!name || name.toLowerCase() === 'id' || name === '编号') return null;
  if (traitCatalog[name]) return name;
  const found = Object.entries(traitCatalog).find(([key, meta]) => meta.label === name || `${meta.label}(${meta.unit})` === name || key.toLowerCase() === name.toLowerCase());
  return found?.[0] || null;
}

function splitMetricLine(line, separator) {
  return line.split(separator).map((item) => item.trim().replace(/^'|'$/g, '').replace(/^"|"$/g, ''));
}

function parsePopulationMetricRows(text) {
  const trimmed = text.trim();
  if (!trimmed) return [];
  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    const parsed = JSON.parse(trimmed);
    const rows = Array.isArray(parsed) ? parsed : (parsed.candidates || parsed.population || []);
    if (!Array.isArray(rows)) throw new Error('JSON 需要是数组，或包含 candidates / population 数组。');
    return rows.map((row, index) => ({ id: row.id || row.code || `P${state.generation}-${String(index + 1).padStart(3, '0')}`, metrics: row.metrics || row }));
  }
  const lines = trimmed.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const separator = lines[0].includes('\t') ? '\t' : ',';
  const headers = splitMetricLine(lines[0], separator);
  const traitHeaders = headers.map(traitKeyFromHeader);
  return lines.slice(1).map((line, rowIndex) => {
    const cells = splitMetricLine(line, separator);
    const metrics = {};
    traitHeaders.forEach((trait, index) => {
      if (!trait) return;
      const value = Number(cells[index]);
      if (Number.isFinite(value)) metrics[trait] = value;
    });
    return { id: cells[0] || `P${state.generation}-${String(rowIndex + 1).padStart(3, '0')}`, metrics };
  });
}

function applyPopulationMetrics() {
  if (!ensureSimulationLogin()) return;
  const text = els.populationMetricsInput.value;
  let rows = [];
  try {
    rows = parsePopulationMetricRows(text);
  } catch (error) {
    addRecord(`群体指标导入失败：${error.message}`);
    renderRecords();
    return;
  }
  if (!rows.length) {
    addRecord('群体指标导入提示：请粘贴 JSON 数组或 CSV 指标表。');
    renderRecords();
    return;
  }
  rows.forEach((row, index) => {
    let candidate = state.candidates.find((item) => item.id === row.id) || state.candidates[index];
    if (!candidate) {
      candidate = makeCandidate(state.candidates.length);
      state.candidates.push(candidate);
    }
    candidate.id = row.id || candidate.id;
    Object.entries(row.metrics || {}).forEach(([trait, rawValue]) => {
      const key = traitKeyFromHeader(trait);
      const value = Number(rawValue);
      if (key && Number.isFinite(value)) {
        const meta = traitCatalog[key];
        candidate.metrics[key] = Number(clamp(value, meta.min, meta.max).toFixed(meta.max <= 10 ? 1 : 2));
      }
    });
    candidate.score = scoreMetrics(candidate.metrics);
    candidate.evaluated = true;
  });
  state.populationSize = state.candidates.length;
  safeStorageSet('local', 'forestBreedingPopulationSize', String(state.populationSize));
  safeStorageSet('local', 'forestBreedingLastPopulationInput', text);
  state.elites = state.elites.filter((elite) => state.candidates.some((candidate) => candidate.id === elite.id));
  addRecord(`已导入 ${rows.length} 个个体指标，并按当前权重重新计算选择指数。`);
  renderAll();
}

function renderWeights() {
  els.weightBars.innerHTML = Object.entries(state.selectedSpecies.weights).map(([trait, weight]) => `
    <div class='weight-row'>
      <span>${traitCatalog[trait].label}</span>
      <i><b style='width:${Math.round(weight * 100)}%'></b></i>
      <strong>${Math.round(weight * 100)}%</strong>
    </div>
  `).join('');
}

function renderMetrics() {
  els.stageNumber.textContent = state.stage + 1;
  els.candidateCount.textContent = state.candidates.length;
  els.eliteCount.textContent = state.elites.length;
  const populationMean = state.candidates.reduce((sum, item) => sum + item.score, 0) / Math.max(1, state.candidates.length);
  const eliteMean = state.elites.reduce((sum, item) => sum + item.score, 0) / Math.max(1, state.elites.length);
  els.gainValue.textContent = state.elites.length ? ((eliteMean - populationMean) * 0.35).toFixed(2) : '0.00';
}

function mean(values) {
  const usable = values.map(Number).filter(Number.isFinite);
  return usable.length ? usable.reduce((sum, value) => sum + value, 0) / usable.length : 0;
}

function variance(values) {
  const usable = values.map(Number).filter(Number.isFinite);
  if (usable.length < 2) return 0;
  const avg = mean(usable);
  return usable.reduce((sum, value) => sum + (value - avg) ** 2, 0) / (usable.length - 1);
}

function summarizeTrait(trait, candidates, selected) {
  const meta = traitCatalog[trait] || { label: trait, unit: '' };
  const populationValues = candidates.map((item) => item.metrics?.[trait]).filter(Number.isFinite);
  const selectedValues = selected.map((item) => item.metrics?.[trait]).filter(Number.isFinite);
  const populationMean = mean(populationValues);
  const selectedMean = mean(selectedValues);
  const phenotypicVariance = variance(populationValues);
  const selectedVariance = variance(selectedValues);
  const selectionDifferential = selectedValues.length ? selectedMean - populationMean : 0;
  const heritability = phenotypicVariance > 0 ? clamp(0.18 + Math.abs(selectionDifferential) / Math.max(Math.sqrt(phenotypicVariance), 1) * 0.12, 0.12, 0.72) : 0;
  return { trait, label: meta.label, unit: meta.unit, threshold: meta.threshold, weight: state.selectedSpecies?.weights?.[trait] || 0, populationMean: Number(populationMean.toFixed(4)), selectedMean: Number(selectedMean.toFixed(4)), populationVariance: Number(phenotypicVariance.toFixed(4)), selectedVariance: Number(selectedVariance.toFixed(4)), selectionDifferential: Number(selectionDifferential.toFixed(4)), estimatedHeritability: Number(heritability.toFixed(4)), expectedGeneticGain: Number((selectionDifferential * heritability).toFixed(4)) };
}

function calculateBreedingParameters() {
  const candidates = state.candidates || [];
  const selected = state.elites.length ? state.elites : candidates.filter((item) => item.elite);
  const populationScores = candidates.map((item) => item.score);
  const selectedScores = selected.map((item) => item.score);
  const populationMean = mean(populationScores);
  const selectedMean = mean(selectedScores);
  const scoreVariance = variance(populationScores);
  const scoreSd = Math.sqrt(scoreVariance);
  const selectionDifferential = selected.length ? selectedMean - populationMean : 0;
  const selectionIntensity = scoreSd > 0 ? selectionDifferential / scoreSd : 0;
  const meanTraitHeritability = mean(getTraits().map((trait) => summarizeTrait(trait, candidates, selected).estimatedHeritability));
  const realizedGain = selected.length ? selectedMean - populationMean : 0;
  return { populationSize: candidates.length, selectedSize: selected.length, selectionRate: Number((selected.length / Math.max(1, candidates.length)).toFixed(4)), populationMeanScore: Number(populationMean.toFixed(4)), selectedMeanScore: Number(selectedMean.toFixed(4)), scoreVariance: Number(scoreVariance.toFixed(4)), selectionDifferential: Number(selectionDifferential.toFixed(4)), selectionIntensity: Number(selectionIntensity.toFixed(4)), estimatedHeritability: Number(meanTraitHeritability.toFixed(4)), expectedGeneticGain: Number((selectionDifferential * meanTraitHeritability).toFixed(4)), realizedSelectionAdvantage: Number(realizedGain.toFixed(4)), thresholds: getThresholds(), traitSummaries: getTraits().map((trait) => summarizeTrait(trait, candidates, selected)) };
}

function renderEliteTable() {
  if (!state.elites.length) {
    els.eliteTable.innerHTML = `<tr><td colspan='4'>尚未选择优树。点击天然群体中的候选单株录入指标。</td></tr>`;
    return;
  }
  els.eliteTable.innerHTML = state.elites.map((candidate) => `
    <tr>
      <td>${candidate.id}</td>
      <td>${candidate.stage}</td>
      <td>${candidate.score.toFixed(2)}</td>
      <td>${dominantTraits(candidate)}</td>
    </tr>
  `).join('');
}

function renderRecords() {
  els.recordList.innerHTML = state.records.length ? state.records.map((item) => `<li>${item}</li>`).join('') : `<li>请选择物种并开始仿真。</li>`;
  if (!isAdmin()) {
    els.loginRecordPanel.hidden = true;
    els.loginRecordPanel.innerHTML = '';
    return;
  }
  els.loginRecordPanel.hidden = false;
  els.loginRecordPanel.innerHTML = `
    <h3>登录人员记录</h3>
    ${state.loginRecords.length ? `
      <ul>
        ${state.loginRecords.slice(0, 6).map((item) => `<li><strong>${item.name}</strong><span>${item.account}</span><small>${item.loginAt}</small></li>`).join('')}
      </ul>
    ` : `<p>暂无登录记录。正式部署后可接入服务器数据库。</p>`}
  `;
}
function renderAll() {
  renderStats();
  renderResources();
  renderCourseMenu();
  renderTheory();
  renderSpeciesContext();
  renderSteps();
  renderPlot();
  renderThresholds();
  renderPopulationBuilder();
  renderWeights();
  renderMetrics();
  renderEliteTable();
  renderRecords();
  renderScene();
}

function addRecord(text) {
  const stamp = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
  state.records.unshift(`${stamp} · ${text}`);
  state.records = state.records.slice(0, 18);
  safeStorageSet("local", "breedingRecords", JSON.stringify(state.records));
}

function openCandidate(candidateId) {
  const candidate = [...state.candidates, ...state.trials].find((item) => item.id === candidateId);
  if (!candidate) return;
  state.activeCandidateId = candidateId;
  els.dialogTitle.textContent = `${candidate.id} · ${state.selectedSpecies.name} 选优参数`;
  els.candidateFields.innerHTML = getTraits().map((trait) => {
    const meta = traitCatalog[trait];
    const value = candidate.metrics[trait];
    return `
      <label>
        <span>${meta.label}（${meta.unit}）</span>
        <input name="${trait}" type="number" min="${meta.min}" max="${meta.max}" step="${meta.max <= 10 ? 0.1 : 0.01}" value="${value}">
      </label>
    `;
  }).join("");
  updateDialogScore();
  els.candidateDialog.showModal();
}

function updateDialogScore() {
  const metrics = Object.fromEntries(new FormData(els.candidateForm).entries());
  els.dialogScore.textContent = scoreMetrics(metrics).toFixed(2);
}

function toTraitId(name) {
  const ascii = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  if (ascii) return `custom_${ascii}`;
  state.customTraitSerial += 1;
  safeStorageSet("local", "forestBreedingCustomTraitSerial", String(state.customTraitSerial));
  return `custom_trait_${state.customTraitSerial}`;
}

function addCustomTrait(source = "dialog") {
  if (!state.selectedSpecies) return;
  const fromPanel = source === "panel";
  const label = (fromPanel ? els.globalTraitName.value : els.customTraitName.value).trim();
  const unit = (fromPanel ? els.globalTraitUnit.value : els.customTraitUnit.value).trim() || "分";
  const rawValue = fromPanel ? Number(els.globalTraitThreshold.value) : Number(els.customTraitValue.value);
  const rawMax = fromPanel ? Number(els.globalTraitMax.value) : NaN;
  const weight = Number((fromPanel ? els.globalTraitWeight.value : els.customTraitWeight.value) || 0.08);
  const category = fromPanel ? els.globalTraitCategory.value : "custom";
  if (!label) {
    addRecord("自定义指标提示：请输入指标名称。");
    renderRecords();
    return;
  }
  const traitId = toTraitId(label);
  const value = Number.isFinite(rawValue) ? rawValue : 0;
  const min = Math.min(0, value);
  const max = Number.isFinite(rawMax) && rawMax > value ? rawMax : Math.max(value * 1.8 || 10, 10);
  traitCatalog[traitId] = {
    label,
    unit,
    min,
    max,
    threshold: value || Number((max * 0.6).toFixed(2)),
    category
  };
  state.selectedSpecies.weights[traitId] = Number.isFinite(weight) ? weight : 0.08;
  [...state.candidates, ...state.trials].forEach((candidate) => {
    if (!fromPanel && candidate.id === state.activeCandidateId) {
      candidate.metrics[traitId] = value;
    } else {
      candidate.metrics[traitId] = Number(randomBetween(min, max).toFixed(2));
    }
    candidate.score = scoreMetrics(candidate.metrics);
  });
  addRecord(`新增指标“${label}”（${unit}），已加入 ${state.selectedSpecies.name} 的选优参数体系。`);
  if (fromPanel) {
    els.globalTraitName.value = "";
    renderAll();
  } else {
    openCandidate(state.activeCandidateId);
    renderAll();
  }
}

function saveCandidate() {
  const candidate = state.candidates.find((item) => item.id === state.activeCandidateId)
    || state.trials.find((item) => item.id === state.activeCandidateId);
  if (!candidate) return;

  const formMetrics = Object.fromEntries(new FormData(els.candidateForm).entries());
  Object.entries(formMetrics).forEach(([trait, value]) => {
    candidate.metrics[trait] = Number(value);
  });
  candidate.score = scoreMetrics(candidate.metrics);
  candidate.evaluated = true;
  candidate.elite = true;
  candidate.stage = programSteps[state.stage].title;

  if (!state.elites.some((item) => item.id === candidate.id)) {
    state.elites.push(candidate);
  }
  state.elites.sort((a, b) => b.score - a.score);
  addRecord(`选入 ${candidate.id}，综合指数 ${candidate.score.toFixed(2)}，优势性状：${dominantTraits(candidate)}。`);
  els.candidateDialog.close();
  renderAll();
}

function autoSelect() {
  const thresholds = getThresholds();
  const pass = state.candidates.filter((candidate) => {
    return Object.entries(thresholds).every(([trait, value]) => candidate.metrics[trait] >= value);
  }).sort((a, b) => b.score - a.score).slice(0, 12);

  pass.forEach((candidate) => {
    candidate.evaluated = true;
    candidate.elite = true;
    candidate.stage = programSteps[state.stage].title;
    if (!state.elites.some((item) => item.id === candidate.id)) state.elites.push(candidate);
  });
  state.elites.sort((a, b) => b.score - a.score);
  addRecord(`按当前阈值自动预选 ${pass.length} 株，进入优树候选库。`);
  renderAll();
}

function completeSceneAction(actionId) {
  const simulation = stageSimulations[state.stage];
  const action = simulation.actions.find((item) => item.id === actionId);
  if (!action) return;
  const completed = getCompletedSet();
  if (completed.has(actionId)) return;
  completed.add(actionId);

  if (state.stage === 0 && ["height", "dbh", "crown"].includes(actionId)) {
    state.candidates.slice(0, 8).forEach((candidate) => {
      candidate.evaluated = true;
    });
  }
  if (state.stage === 1 && actionId === "eliteGroup" && state.elites.length === 0) {
    autoSelect();
  }
  if (state.stage === 4 && actionId === "breedingValue") {
    const tested = state.trials.length ? state.trials : state.candidates;
    tested.sort((a, b) => b.score - a.score).slice(0, 8).forEach((candidate) => {
      candidate.elite = true;
      candidate.evaluated = true;
      if (!state.elites.some((item) => item.id === candidate.id)) state.elites.push(candidate);
    });
    state.elites.sort((a, b) => b.score - a.score);
  }
  const knowledge = stageKnowledgeCards[state.stage] || stageKnowledgeCards[0];
  addRecord(`${programSteps[state.stage].title}：完成“${action.label}”。知识点：${knowledge.chapter} / ${knowledge.focus}。`);
  renderAll();
}

function getThresholds() {
  const controls = document.querySelectorAll("[data-threshold]");
  return Object.fromEntries([...controls].map((input) => [input.dataset.threshold, Number(input.value)]));
}

function nextStage() {
  if (!state.selectedSpecies) return;
  if (!isStageComplete()) {
    addRecord(`请先完成“${programSteps[state.stage].title}”中的所有互动操作。`);
    renderAll();
    document.querySelector(".animation-lab")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (state.stage === 1 && state.elites.length === 0) {
    addRecord("需要至少选择 1 株优树，才能进入亲本构建。");
    renderRecords();
    return;
  }
  state.stage = (state.stage + 1) % programSteps.length;

  if (state.stage === 3) {
    addRecord(`将 ${state.elites.length} 株优树转入亲本库，模拟控制授粉或无性扩繁。`);
  }
  if (state.stage === 4) {
    createTrials();
    addRecord(`形成 ${state.trials.length} 个测定材料，进入苗圃/子代/无性系测定。`);
  }
  if (state.stage === 6) {
    addRecord(`部署前 ${Math.min(6, state.elites.length)} 个材料至种子园、采穗圃、品种比较或示范林。`);
  }
  if (state.stage === 9) {
    addRecord("完成本轮循环改良，可保留优秀亲本并进入下一世代。");
  }
  if (state.stage === 0) {
    state.generation += 1;
    generatePopulation();
    state.elites = [];
    state.trials = [];
    state.completedActions = {};
    addRecord(`进入第 ${state.generation} 轮天然群体调查。`);
  }
  renderAll();
}

function createTrials() {
  const parents = state.elites.slice(0, 10);
  state.trials = parents.flatMap((parent, parentIndex) => {
    return Array.from({ length: 4 }, (_, childIndex) => {
      const metrics = {};
      getTraits().forEach((trait) => {
        const meta = traitCatalog[trait];
        const inherited = parent.metrics[trait] + normalNoise((meta.max - meta.min) * 0.05);
        metrics[trait] = Number(clamp(inherited, meta.min, meta.max).toFixed(meta.max <= 10 ? 1 : 2));
      });
      return {
        id: `T${state.generation}-${parentIndex + 1}-${childIndex + 1}`,
        metrics,
        score: scoreMetrics(metrics),
        evaluated: true,
        elite: childIndex === 0,
        stage: "测定材料"
      };
    });
  });
}

function resetCurrentSpecies() {
  state.stage = 0;
  state.generation = 1;
  state.elites = [];
  state.trials = [];
  generatePopulation();
  addRecord(`重置 ${state.selectedSpecies.name} 的仿真群体。`);
  renderAll();
}

function retryCurrentStage() {
  delete state.completedActions[stageKey()];
  addRecord(`重做“${programSteps[state.stage].title}”仿真实验步骤。`);
  renderAll();
}

function exportRecords() {
  const breedingParameters = calculateBreedingParameters();
  const completedActions = Object.fromEntries(Object.entries(state.completedActions).map(([key, value]) => [
    key,
    Array.isArray(value) ? value : [...value]
  ]));
  const data = {
    title: "林木育种选育仿真实践",
    exportedAt: new Date().toLocaleString("zh-CN", { hour12: false }),
    loginUser: state.loginUser,
    adminUser: state.adminUser,
    loginRecords: state.loginRecords,
    species: state.selectedSpecies,
    generation: state.generation,
    populationSize: state.candidates.length,
    naturalPopulation: state.candidates.map((candidate) => ({
      id: candidate.id,
      metrics: candidate.metrics,
      score: Number(candidate.score.toFixed(4)),
      evaluated: candidate.evaluated,
      selectedAsElite: candidate.elite,
      stage: candidate.stage,
      dominantTraits: dominantTraits(candidate)
    })),
    selectedStage: programSteps[state.stage],
    completedActions,
    thresholds: getThresholds(),
    weights: state.selectedSpecies?.weights || {},
    traitCatalog: Object.fromEntries(getTraits().map((trait) => [trait, traitCatalog[trait]])),
    elites: state.elites,
    trials: state.trials,
    breedingParameters,
    selectionResults: {
      selectedEliteCount: state.elites.length,
      selectionDifferential: breedingParameters.selectionDifferential,
      selectionIntensity: breedingParameters.selectionIntensity,
      estimatedHeritability: breedingParameters.estimatedHeritability,
      expectedGeneticGain: breedingParameters.expectedGeneticGain,
      realizedSelectionAdvantage: breedingParameters.realizedSelectionAdvantage
    },
    theoryEdits: safeJsonObject("forestBreedingTheoryOverrides"),
    customTraits: Object.fromEntries(Object.entries(traitCatalog).filter(([key]) => key.startsWith("custom_"))),
    records: state.records
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.selectedSpecies.id}-breeding-record.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importResources(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  const incoming = Array.isArray(parsed) ? parsed : parsed.resources;
  if (!Array.isArray(incoming)) throw new Error("JSON 需要是数组，或包含 resources 数组。");
  const existingIds = new Set(state.resources.map((item) => item.id));
  incoming.forEach((item) => {
    if (item.id && item.name && item.scientific && item.weights && !existingIds.has(item.id)) {
      state.resources.push(item);
    }
  });
  addRecord(`导入 ${incoming.length} 条植物资源记录。`);
  renderAll();
}

function bindEvents() {
  els.resourceSearch.addEventListener("input", renderResources);
  els.typeFilter.addEventListener("change", renderResources);
  els.speciesList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-species-id]");
    if (card) selectSpecies(card.dataset.speciesId);
  });
  document.addEventListener("click", (event) => {
    const mode = event.target.closest("[data-mode]");
    if (!mode) return;
    const targetMode = mode.dataset.mode === "cover" ? "theory" : mode.dataset.mode;
    setMode(targetMode);
    if (mode.dataset.mode === "practice") {
      document.querySelector("#practiceModule")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (mode.dataset.mode === "theory" || mode.dataset.mode === "cover") {
      document.querySelector("#theoryModule")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (mode.dataset.mode === "exam") {
      addRecord("进入考核模式：需按顺序完成每一步操作，并导出最终选育记录。");
      document.querySelector("#examModule")?.scrollIntoView({ behavior: "smooth", block: "start" });
      renderRecords();
    }
  });
  els.theoryList.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-theory-index]");
    if (!tab) return;
    state.theoryChapterIndex = Number(tab.dataset.theoryIndex);
    state.theoryKnowledgeIndex = 0;
    state.theorySlideIndex = 0;
    renderTheory();
  });
  els.knowledgeList.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-knowledge-index]");
    if (!tab) return;
    state.theoryKnowledgeIndex = Number(tab.dataset.knowledgeIndex);
    state.theorySlideIndex = 0;
    renderTheory();
  });
  els.prevSlideBtn.addEventListener("click", () => {
    state.theorySlideIndex = Math.max(0, state.theorySlideIndex - 1);
    renderTheory();
  });
  els.nextSlideBtn.addEventListener("click", () => {
    const chapter = chapterKnowledge[state.theoryChapterIndex];
    const point = chapter.points[state.theoryKnowledgeIndex];
    if (state.theorySlideIndex < point.slides.length - 1) {
      state.theorySlideIndex += 1;
    } else if (state.theoryKnowledgeIndex < chapter.points.length - 1) {
      state.theoryKnowledgeIndex += 1;
      state.theorySlideIndex = 0;
    } else if (state.theoryChapterIndex < chapterKnowledge.length - 1) {
      state.theoryChapterIndex += 1;
      state.theoryKnowledgeIndex = 0;
      state.theorySlideIndex = 0;
    }
    renderTheory();
  });
  els.examStartBtn.addEventListener("click", () => {
    setMode("practice");
    addRecord("考核开始：请从当前步骤按顺序完成仿真实验。");
    renderRecords();
    document.querySelector("#practiceModule")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  els.courseMenu.addEventListener("click", (event) => {
    const item = event.target.closest("[data-menu-step]");
    if (!item) return;
    const targetStage = Number(item.dataset.menuStep);
    const canMove = targetStage <= state.stage || (targetStage === state.stage + 1 && isStageComplete(state.stage));
    if (canMove) {
      state.stage = targetStage;
      renderAll();
      document.querySelector(".animation-lab")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    addRecord(`目录已锁定：请按顺序完成“${programSteps[state.stage].title}”。`);
    renderRecords();
  });
  els.stepTrack.addEventListener("click", (event) => {
    const step = event.target.closest("[data-step]");
    if (!step) return;
    const targetStage = Number(step.dataset.step);
    const canMove = targetStage <= state.stage || (targetStage === state.stage + 1 && isStageComplete(state.stage));
    if (canMove) {
      state.stage = targetStage;
      const knowledge = stageKnowledgeCards[state.stage] || stageKnowledgeCards[0];
      addRecord(`查看步骤 ${state.stage + 1}“${programSteps[state.stage].title}”：${knowledge.chapter}，${knowledge.focus}。`);
      renderAll();
      return;
    }
    addRecord(`选育程序需要循序渐进：请先完成“${programSteps[state.stage].title}”，再进入下一步。`);
    renderRecords();
  });
  els.populationPlot.addEventListener("click", (event) => {
    const node = event.target.closest("[data-candidate-id]");
    if (node) openCandidate(node.dataset.candidateId);
  });
  document.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action-id]");
    if (action) completeSceneAction(action.dataset.actionId);
  });
  els.thresholdControls.addEventListener("input", (event) => {
    const input = event.target.closest("[data-threshold]");
    if (!input) return;
    document.querySelector(`#th-${input.dataset.threshold}`).textContent = input.value;
  });
  els.candidateFields.addEventListener("input", updateDialogScore);
  els.saveCandidateBtn.addEventListener("click", saveCandidate);
  els.addCustomTraitBtn.addEventListener("click", () => addCustomTrait("dialog"));
  els.addGlobalTraitBtn.addEventListener("click", () => addCustomTrait("panel"));
  els.regeneratePopulationBtn.addEventListener("click", regeneratePopulationFromInput);
  els.applyPopulationMetricsBtn.addEventListener("click", applyPopulationMetrics);
  els.autoSelectBtn.addEventListener("click", autoSelect);
  els.retryStageBtn.addEventListener("click", retryCurrentStage);
  els.nextStepBtn.addEventListener("click", nextStage);
  els.resetBtn.addEventListener("click", resetCurrentSpecies);
  els.exportBtn.addEventListener("click", exportRecords);
  els.loginStatusBtn.addEventListener("click", () => showLoginDialog(true));
  els.guestLoginBtn.addEventListener("click", loginAsGuest);
  els.wechatLoginBtn.addEventListener("click", loginWithWechat);
  els.logoutAllBtn.addEventListener("click", logoutAllUsers);
  els.adminStatusBtn.addEventListener("click", showAdminDialog);
  els.adminLoginBtn.addEventListener("click", loginAdmin);
  els.adminForm.addEventListener("submit", loginAdmin);
  els.adminLogoutBtn.addEventListener("click", logoutAdmin);
  els.saveTheoryEditBtn.addEventListener("click", saveCurrentTheoryEdit);
  els.addKnowledgePointBtn.addEventListener("click", addKnowledgePoint);
  els.addTheorySlideBtn.addEventListener("click", addTheorySlide);
  els.deleteTheorySlideBtn.addEventListener("click", deleteCurrentTheorySlide);
  els.resetTheoryOverrideBtn.addEventListener("click", resetTheoryOverrides);
  els.adminSlideImageFile.addEventListener("change", (event) => {
    const [file] = event.target.files;
    loadAdminImageFile(file);
  });
  els.clearLogBtn.addEventListener("click", () => {
    state.records = [];
    safeStorageRemove("local", "breedingRecords");
    renderRecords();
  });
  els.resourceFile.addEventListener("change", async (event) => {
    const [file] = event.target.files;
    if (!file) return;
    try {
      await importResources(file);
    } catch (error) {
      addRecord(`资源导入失败：${error.message}`);
      renderRecords();
    }
  });
}

function bootSimulation() {
  try {
    applyTheoryOverrides();
    loadLoginUser();
    loadAdminUser();
    bindEvents();
    selectSpecies(state.resources[0]?.id);
    setMode("theory");
    showLoginDialog();
  } catch (error) {
    console.error(error);
    const message = `椤甸潰鍒濆鍖栧紓甯革細${error.message || error}`;
    if (els.recordList) {
      els.recordList.innerHTML = `<li>${message}</li>`;
    }
    if (els.populationPlot && state.resources.length) {
      state.selectedSpecies = state.resources[0];
      generatePopulation();
      renderPlot();
      renderThresholds();
      renderWeights();
      renderMetrics();
    }
  }
}

bootSimulation();







