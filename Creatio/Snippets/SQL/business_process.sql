---------------------------------------------------------------------
--------------------------- BUSINESS PROCESS ------------------------
---------------------------------------------------------------------

-------------------- Поиск бизнес-процесса в журнале ----------------

SELECT TOP 5* 
FROM VwSysProcessEntity
WHERE EntityDisplayValue = 'SR01880981'

SELECT top 5 * FROM [VwSysProcessLog]
WHERE Id IN (SELECT SysProcessId FROM [VwSysProcessEntity] WHERE EntityDisplayValue = '009567456')
