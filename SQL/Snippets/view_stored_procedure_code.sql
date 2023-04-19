--------------------- View stored procedure code --------------------

SELECT
    sch.name+'.'+ob.name AS       [Object], 
    ob.create_date, 
    ob.modify_date, 
    ob.type_desc, 
    mod.definition
FROM 
     sys.objects AS ob
     LEFT JOIN sys.schemas AS sch ON
            sch.schema_id = ob.schema_id
     LEFT JOIN sys.sql_modules AS mod ON
            mod.object_id = ob.object_id
WHERE mod.definition IS NOT NULL
