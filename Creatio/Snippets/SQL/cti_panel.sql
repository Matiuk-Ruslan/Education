---------------------------------------------------------------------
----------------------------- CTI PANEL -----------------------------
---------------------------------------------------------------------

-------- Удаление [Задачи по бизнес-процессам] из CTI-панели --------

DECLARE
            @RequiredContact uniqueidentifier  -- id требуемого контакта
        SET @RequiredContact = '7ee6c45f-50ed-40dc-a787-192124fb0bfb' -- Кукота Марина Олеговна
SELECT COUNT(*) 
FROM [SysProcessElementToDo] WITH(NOLOCK)
WHERE [ContactId] = @RequiredContact

DELETE
FROM [SysProcessElementToDo]
WHERE [ContactId] = @RequiredContact

SELECT COUNT(*) 
FROM [SysProcessElementToDo] WITH(NOLOCK)
WHERE [ContactId] = @RequiredContact
