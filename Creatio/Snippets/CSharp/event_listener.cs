using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace MaibBase.Files.cs.Entities.EventListeners
{
    #region Classes

    /// <summary> Слушатель событий по сущности EntityName </summary>
    [EntityEventListener(SchemaName = "EntityName")]
    internal class EntityNameEventListener : BaseEntityEventListener
    {
        #region Methods

        #region Добавление

        /// <summary> Обработчик события перед добавлением записи </summary>
        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            Entity entity = (Entity)sender;
        }

        /// <summary> Обработчик события после добавления записи </summary>
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);
            Entity entity = (Entity)sender;
        }

        #endregion

        #region Сохранение

        /// <summary> Обработчик события перед сохранением записи </summary>
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity entity = (Entity)sender;
        }

        /// <summary> Обработчик события после сохранения записи </summary>
        public override void OnSaved(object sender, EntityAfterEventArgs e)
        {
            base.OnSaved(sender, e);
            Entity entity = (Entity)sender;
        }

        #endregion  

        #region Обновление

        /// <summary> Обработчик события перед обновлением записи </summary>
        public override void OnUpdating(object sender, EntityBeforeEventArgs e)
        {
            base.OnUpdating(sender, e);
            Entity entity = (Entity)sender;
        }

        /// <summary> Обработчик события после обновления записи </summary>
        public override void OnUpdated(object sender, EntityAfterEventArgs e)
        {
            base.OnUpdated(sender, e);
            Entity entity = (Entity)sender;
        }

        #endregion

        #region Удаление

        /// <summary> Обработчик события перед удалением записи </summary>
        public override void OnDeleting(object sender, EntityBeforeEventArgs e)
        {
            base.OnDeleting(sender, e);
            Entity entity = (Entity)sender;
        }

        /// <summary> Обработчик события после удаления записи </summary>
        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            Entity entity = (Entity)sender;
        }

        #endregion

        #endregion
    }

    #endregion
}