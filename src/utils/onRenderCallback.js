export default (
  id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
  phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
  actualDuration, // время, затраченное на рендер зафиксированного обновления
  baseDuration, // предполагаемое время рендера всего поддерева без кеширования
  startTime, // когда React начал рендерить это обновление
  commitTime, // когда React зафиксировал это обновление
  interactions // Множество «взаимодействий» для данного обновления
) => {
  console.log('ID:', id);
  console.log('PHASE:', phase);
  console.log('ACTUAL DURATION:', actualDuration);
  console.log('BASE DURATION:', baseDuration);
  console.log('START TIME:', startTime);
  console.log('COMMIT TIME:', commitTime);
  console.log('INTERACTIONS:', interactions);
};
