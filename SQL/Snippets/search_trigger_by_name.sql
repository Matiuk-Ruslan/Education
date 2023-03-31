SELECT [constid], 
       [id], 
       [colid], 
       [spare1], 
       [status], 
       [actions], 
       [error], 
       object_name(id) as tabName, 
       object_name(constid) as constraintNname
FROM sys.sysconstraints
WHERE object_name(constid) = 'TRIGGER_NAME'